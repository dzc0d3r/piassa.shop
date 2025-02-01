import { PartnerCard } from "@/components/dashboard/cards";
import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function Page(): React.JSX.Element {
  return (
    <main className="grid min-h-screen grid-cols-10">
      <Sidebar />

      <section className="container col-span-9 mx-auto w-full">
        <Header />
        <div className="mt-10 flex h-fit justify-end">
          <PartnerCard />
        </div>
      </section>
    </main>
  );
}
