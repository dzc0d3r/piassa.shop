import Profile from "./profile";
import { SearchBox } from "./search-box";
import WilayaSelect from "./wilayas-select";

export function Header() {
  return (
    <header className="container col-span-11 mx-auto mt-5">
      <div className="relative flex items-center gap-2">
        <SearchBox />
        <WilayaSelect />
        <Profile />
      </div>
    </header>
  );
}
