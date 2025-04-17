import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Container({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-4 sm:px-8 md:px-10 lg:px-12 2xl:px-14",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
