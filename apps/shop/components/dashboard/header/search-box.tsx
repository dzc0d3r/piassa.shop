import { Input } from "@piassa/ui/components/input";
import { FaSearch } from "react-icons/fa";

export const SearchBox = () => {
  return (
    <>
      <div className="bg-primary border-r-white text-xs font-light text-white">
        <FaSearch
          size={12}
          className="bg-primary h-6.5 w-6.5 absolute left-3.5 top-1/2 -translate-y-1/2 transform rounded-sm border-white p-1"
        />
      </div>
      <div className="absolute left-11 top-1/2 h-3/5 -translate-y-1/2 transform border-l-2 border-white" />

      <Input
        type="text"
        placeholder="Recherche"
        className="h-11 w-[40%] bg-[#933123] p-5 pl-11 font-medium text-white placeholder:text-lg placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </>
  );
};