import { Container, Logo, Button } from "@/components/ui";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Forums", href: "/forum" },
  { label: "My Courses", href: "/dashboard" },
];

export async function Navbar() {
  const { userId } = await auth();
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Logo />

          <div className="hidden items-center space-x-4 md:flex">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <div>
            {userId ? (
              <UserButton />
            ) : (
              <Button asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
