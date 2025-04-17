import { Footer, Navbar } from "@/components/shared";
import { Fragment, PropsWithChildren } from "react";

export default async function layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Navbar />

      <main className="grainy flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
        <div className="flex h-full flex-1 flex-col">{children}</div>
        <Footer />
      </main>
    </Fragment>
  );
}
