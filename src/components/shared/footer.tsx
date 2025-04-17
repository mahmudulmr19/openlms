import { Container, Logo, Button } from "@/components/ui";
import { Facebook, Youtube } from "lucide-react";
import { config } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <Container className="pt-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          <div className="space-y-6 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm text-gray-500">
              {config.footerText}
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md"
                asChild
              >
                <Link href={config.social.youtube} target="_blank">
                  <Youtube className="size-5 text-gray-600" />
                  <span className="sr-only">Youtube</span>
                </Link>
              </Button>

              <div className="h-8 border-l border-gray-200" />

              <Button
                variant="ghost"
                size="icon"
                className="rounded-md"
                asChild
              >
                <Link href={config.social.facebook} target="_blank">
                  <Facebook className="size-5 text-gray-600" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8 lg:col-span-3 lg:mt-0">
            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-gray-600">
                Quick Links
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/forum"
                  >
                    Support Forum
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/my-courses"
                  >
                    My Courses
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-gray-600">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/legal/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/legal/terms"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-gray-500 hover:text-gray-900"
                    href="/legal/refund"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-10 lg:mt-16">
          <p className="text-sm leading-5 text-gray-500">
            Copyright © {new Date().getFullYear()} {config.siteName}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
