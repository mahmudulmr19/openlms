import { Container, Logo, Button } from "@/components/ui";
import Link from "next/link";

const navlinks = [
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Support Forum", href: "/forum" },
  { label: "My Classes", href: "/dashboard" },
];

export function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Logo />

          <div className="hidden items-center space-x-4 md:flex">
            {navlinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <Button>Login</Button>
        </div>
      </Container>
    </div>
  );
}
