"use client";
import { Container, Logo, Button } from "@/components/ui";
import { CheckRole } from "@/lib/roles";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Forums", href: "/forum" },
  { label: "My Courses", href: "/dashboard" },
];

export function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();
  const isAdmin = CheckRole("admin");
  const router = useRouter();

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

          <div className="w-full max-w-[40px] flex justify-end">
            {!isLoaded ? (
              ""
            ) : (
              <>
                {isSignedIn ? (
                  <UserButton>
                    <UserButton.MenuItems>
                      {isAdmin && (
                        <UserButton.Action
                          label="Admin Dashboard"
                          labelIcon={
                            <LayoutDashboard className="cl-internal-kjkbhu" />
                          }
                          onClick={() => router.push("/admin/home")}
                        />
                      )}
                    </UserButton.MenuItems>
                  </UserButton>
                ) : (
                  <Button asChild>
                    <Link href="/sign-in">Login</Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
