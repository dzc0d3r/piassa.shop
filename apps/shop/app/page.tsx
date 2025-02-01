import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";


export default function Page(): React.JSX.Element {
  return (
    <main className="grid min-h-screen grid-cols-10">
      <Sidebar />

      <div className="col-span-9 w-full">
        <Header />
        <div className="mt-10 h-fit bg-amber-50">test</div>
      </div>
    </main>
  );
}