import wilayas from "@/mock-data/wilayas";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@piassa/ui/components/select";
import { FiMapPin } from "react-icons/fi";

function WilayaSelect() {
  return (
    <Select>
      <SelectTrigger className="selection: mx-2 w-[180px] gap-1 border-none bg-[#933123] text-sm text-white">
        <FiMapPin className="h-3 w-3 text-white" />
        <SelectValue placeholder="Select Wilaya" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Wilaya</SelectLabel>
          {wilayas.map((wilaya) => (
            <SelectItem key={wilaya.id} value={wilaya.id}>
              {wilaya.name}
            </SelectItem>
          ))}

          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default WilayaSelect;
