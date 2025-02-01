// components/sidebar.tsx
import { cn } from "@piassa/lib";
import Logo from "./logo";
import NavLinks from "./nav-links";

export function Sidebar() {
  return (
    <aside
      className={cn(
        "col-span-1 flex-col md:flex",
        "h-screen",
        "bg-white/10 backdrop-blur-xl",
      )}
    >
      <Logo />
      <NavLinks />
    </aside>
  );
}
