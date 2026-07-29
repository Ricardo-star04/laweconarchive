import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-24 text-center">
      <h1 className="font-serifCn text-3xl text-accent">Page Not Found</h1>
      <p className="mt-3 text-sm text-muted">Please check the link or return to the homepage.</p>
      <Link href="/" className="mt-6 inline-block text-sm underline">
        Return Home
      </Link>
    </div>
  );
}
