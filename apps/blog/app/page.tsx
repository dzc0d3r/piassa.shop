import { Button } from "@piassa/ui/components/button";

export default function Home() {
  return (
    <div className="place-content-cente grid h-screen">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h4>Blog</h4>
        <Button variant="default">Button</Button>
      </main>
    </div>
  );
}
