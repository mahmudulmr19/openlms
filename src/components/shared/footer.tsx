import { Container, Logo, Button } from "@/components/ui";
import { Facebook, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/50 py-8 backdrop-blur-lg">
      <Container className="pt-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          <div className="space-y-6 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm text-zinc-500">
              {siteConfig.footerText}
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md"
                asChild
              >
                <Link href={siteConfig.social.youtube} target="_blank">
                  <Youtube className="size-5 text-zinc-600" />
                  <span className="sr-only">Youtube</span>
                </Link>
              </Button>

              <div className="h-8 border-l border-zinc-200" />

              <Button
                variant="ghost"
                size="icon"
                className="rounded-md"
                asChild
              >
                <Link href={siteConfig.social.facebook} target="_blank">
                  <Facebook className="size-5 text-zinc-600" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8 lg:col-span-3 lg:mt-0">
            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-zinc-600">
                Quick Links
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/forum"
                  >
                    Support Forum
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/my-courses"
                  >
                    My Courses
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-zinc-600">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/legal/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/legal/terms"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    href="/legal/refund"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-10 lg:mt-16">
          <p className="text-sm leading-5 text-zinc-500">
            Copyright © {new Date().getFullYear()} {siteConfig.siteName}. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
