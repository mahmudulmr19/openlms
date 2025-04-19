"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { DayPeriod } from "./day-period";

export function Navbar() {
  const { user } = useUser();
  return (
    <div className="sticky top-0 z-10 flex h-14 w-full shrink-0 items-center justify-between border-b border-slate-950/5 bg-white px-4 py-2 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <DayPeriod name={user?.firstName ?? ""} />
        <UserButton />
      </div>
    </div>
  );
}
