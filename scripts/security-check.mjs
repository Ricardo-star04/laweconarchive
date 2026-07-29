import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const releaseMode = process.argv.includes("--release");
const scannedRoots = ["app", "components", "content", "lib"];
const scannedExtensions = new Set([".js", ".mjs", ".ts", ".tsx", ".md", ".mdx"]);
const failures = [];
const warnings = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const sourceFiles = scannedRoots
  .flatMap((root) => walk(path.join(projectRoot, root)))
  .filter((file) => scannedExtensions.has(path.extname(file)));

const forbiddenPatterns = [
  { label: "dangerouslySetInnerHTML", pattern: /\bdangerouslySetInnerHTML\b/ },
  { label: "eval()", pattern: /\beval\s*\(/ },
  { label: "new Function()", pattern: /\bnew\s+Function\s*\(/ },
  { label: "document.write()", pattern: /\bdocument\.write\s*\(/ },
  { label: "javascript: URL", pattern: /\bjavascript\s*:/i },
  { label: "HTML data URL", pattern: /\bdata\s*:\s*text\/html/i },
  { label: "private key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ }
];

for (const file of sourceFiles) {
  const relativePath = path.relative(projectRoot, file);
  const source = fs.readFileSync(file, "utf8");

  for (const { label, pattern } of forbiddenPatterns) {
    if (relativePath === "scripts/security-check.mjs") continue;
    if (pattern.test(source)) failures.push(`${relativePath}: forbidden ${label}`);
  }

  for (const match of source.matchAll(/http:\/\/[^\s"'`)<]+/gi)) {
    const hostname = new URL(match[0]).hostname;
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      failures.push(`${relativePath}: insecure external http:// URL`);
    }
  }

  if (relativePath.startsWith(`content${path.sep}`)) {
    const mdxRisks = [
      { label: "MDX import/export", pattern: /^\s*(?:import|export)\s/m },
      { label: "script element", pattern: /<script\b/i },
      { label: "inline event handler", pattern: /\son[a-z]+\s*=/i }
    ];

    for (const { label, pattern } of mdxRisks) {
      if (pattern.test(source)) failures.push(`${relativePath}: forbidden ${label}`);
    }
  }

  for (const match of source.matchAll(/target="_blank"/g)) {
    const context = source.slice(Math.max(0, match.index - 240), match.index + 320);
    if (!/rel="[^"]*(?:noopener|noreferrer)[^"]*"/.test(context)) {
      failures.push(`${relativePath}: target="_blank" without noopener or noreferrer`);
    }
  }
}

const gitignore = fs.readFileSync(path.join(projectRoot, ".gitignore"), "utf8");
if (!gitignore.split(/\r?\n/).some((line) => line.trim() === ".env*")) {
  failures.push(".gitignore must exclude .env* files");
}

const unexpectedEnvFiles = fs
  .readdirSync(projectRoot)
  .filter((name) => name.startsWith(".env") && name !== ".env.example");
if (unexpectedEnvFiles.length) {
  failures.push(`unexpected environment file(s) in project root: ${unexpectedEnvFiles.join(", ")}`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));
if (packageJson.private !== true) failures.push("package.json must set private to true");

const nextConfig = fs.readFileSync(path.join(projectRoot, "next.config.ts"), "utf8");
for (const requiredSetting of [
  "Content-Security-Policy",
  "Strict-Transport-Security",
  "X-Content-Type-Options",
  "X-Frame-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "poweredByHeader: false",
  "productionBrowserSourceMaps: false"
]) {
  if (!nextConfig.includes(requiredSetting)) failures.push(`next.config.ts is missing ${requiredSetting}`);
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (!siteUrl) {
  const message = "NEXT_PUBLIC_SITE_URL is not set; local metadata will use http://localhost:3005";
  if (releaseMode) failures.push(message);
  else warnings.push(message);
} else {
  try {
    const parsedUrl = new URL(siteUrl);
    if (releaseMode && parsedUrl.protocol !== "https:") {
      failures.push("release NEXT_PUBLIC_SITE_URL must use https");
    }
    if (releaseMode && /(?:localhost|127\.0\.0\.1|\.example)$/i.test(parsedUrl.hostname)) {
      failures.push("release NEXT_PUBLIC_SITE_URL must use the real public hostname");
    }
  } catch {
    failures.push("NEXT_PUBLIC_SITE_URL is not a valid absolute URL");
  }
}

for (const warning of warnings) console.warn(`WARN: ${warning}`);

if (failures.length) {
  for (const failure of failures) console.error(`FAIL: ${failure}`);
  process.exit(1);
}

console.log(`Security check passed (${sourceFiles.length} source files scanned).`);
