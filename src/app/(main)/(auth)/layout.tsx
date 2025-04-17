import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" flex h-full items-center justify-center py-20 md:py-24">
      {children}
    </div>
  );
}
