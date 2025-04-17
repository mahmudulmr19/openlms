import Link from "next/link";

export function Logo({ href }: { href?: string }) {
  return (
    <Link
      href={href ?? "/"}
      className="flex select-none items-center font-semibold"
      title="OpenLMS"
    >
      <span className="tracking-wide">Open</span>
      <span className="text-primary">LMS</span>
    </Link>
  );
}
