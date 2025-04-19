import { Navbar, Sidebar } from "@/components/admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grainy flex flex-1 flex-col lg:pl-64">
        <Navbar />
        <div className="flex h-full flex-1 flex-col p-4">{children}</div>
      </main>
    </div>
  );
}
