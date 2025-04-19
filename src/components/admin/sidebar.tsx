"use client";
import { buttonVariants, Logo } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  BookOpenCheck,
  CirclePercent,
  Clapperboard,
  FileText,
  House,
  User,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    label: "Dashboard",
    href: "/home",
    icon: House,
  },
  {
    label: "Users",
    href: "/users",
    icon: Users,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    label: "Media Library",
    href: "/media",
    icon: Clapperboard,
  },
  {
    label: "Assignments",
    href: "/assignments",
    icon: BookOpenCheck,
  },
  {
    label: "Authors",
    href: "/posts/authors",
    icon: User,
  },
  {
    label: "Posts",
    href: "/posts",
    icon: FileText,
  },
  {
    label: "Coupons",
    href: "/coupons",
    icon: CirclePercent,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="fixed inset-y-0 left-0 w-64 border-r border-slate-950/5 bg-white max-lg:hidden">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex flex-col border-b border-slate-950/5 p-4 px-8">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto p-4">
          {links.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.endsWith(href);
            return (
              <Link
                key={label}
                href={`/admin${href}`}
                className={cn(
                  buttonVariants({
                    variant: isActive ? "default" : "ghost",
                  }),
                  "justify-start gap-x-2",
                )}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
