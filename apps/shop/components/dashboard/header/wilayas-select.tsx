import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@piassa/ui/components/select";
import { MapPin } from "lucide-react";

function WilayaSelect() {
  return (
    <Select>
      <SelectTrigger className="mx-2 h-11 w-[180px] gap-1 bg-[#933123] text-white">
        <MapPin className="h-3 w-3 text-white" />
        <SelectValue placeholder="Select Wilaya" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
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
