const LOCAL_SITE_URL = "http://localhost:3005";

export function getSiteUrl() {
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelDeploymentUrl = process.env.VERCEL_URL?.trim();
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined) ||
    (vercelDeploymentUrl ? `https://${vercelDeploymentUrl}` : undefined) ||
    LOCAL_SITE_URL;
  const parsedUrl = new URL(configuredUrl);

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use the http or https protocol.");
  }

  return parsedUrl.origin;
}
