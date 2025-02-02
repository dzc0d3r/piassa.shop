import wilayas from "@/mock-data/wilayas";
import { Input } from "@piassa/ui/components/input";
import { Label } from "@piassa/ui/components/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@piassa/ui/components/select";
import { Switch } from "@piassa/ui/components/switch";

const AddParnterForm = () => {
  return (
    <form className="">
      <div className="grid w-full grid-cols-4 gap-3 px-3.5">
        <div className="col-span-1 mb-2">
          <Label htmlFor="first_name" className="text-start font-semibold">
            First Name
          </Label>
          <Input placeholder="Enter first name" className="mt-1 bg-white" />
        </div>
        <div className="col-span-1 mb-2">
          <Label htmlFor="last_name" className="text-start font-semibold">
            Last Name
          </Label>
          <Input placeholder="Enter last name" className="mt-1" />
        </div>
        <div className="col-span-2 mb-2">
          <Label htmlFor="wilaya" className="text-start font-semibold">
            Wilaya
          </Label>
          <Select>
            <SelectTrigger className=",t-1">
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
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2 mb-2">
          <Label htmlFor="store_name" className="text-start font-semibold">
            Store Name
          </Label>
          <Input placeholder="Enter store name" className="mt-1" />
        </div>
        <div className="col-span-2 mb-2">
          <Label htmlFor="commune" className="text-start font-semibold">
            Commune
          </Label>
          <Input type="text" placeholder="Enter commune" className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2 mb-2">
          <Label htmlFor="email" className="text-start font-semibold">
            Email
          </Label>
          <Input placeholder="Enter email" type="email" className="mt-1" />
        </div>
        <div className="col-span-2 mb-2">
          <Label htmlFor="address" className="text-start font-semibold">
            Address
          </Label>
          <Input placeholder="Enter Address" type="text" className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2">
          <Label htmlFor="email" className="text-start font-semibold">
            Email
          </Label>
          <Input placeholder="Enter email" type="email" className="mt-1" />
        </div>
        <div className="col-span-2">
          <Label htmlFor="address" className="text-start font-semibold">
            Address
          </Label>
          <Input placeholder="Enter address" className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2 mb-2">
          <Label htmlFor="password" className="text-start font-semibold">
            Passowrd
          </Label>
          <Input
            placeholder="Enter password"
            type="password"
            className="mt-1"
          />
        </div>
        <div className="col-span-2 mb-2">
          <Label htmlFor="specialty" className="text-start font-semibold">
            Specialty
          </Label>
          <Input placeholder="Enter specialty" type="text" className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2 mb-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="text- col-span-1">
              <Label htmlFor="code" className="text-start font-semibold">
                Phone Number
              </Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="+213" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-black/80">
                      countries codes
                    </SelectLabel>
                    <SelectItem value="213">+213</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-3 flex items-end">
              <Input
                placeholder="Enter phone number"
                type="tel"
                className="mt-1"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 mb-2">
          <Label htmlFor="specialty" className="text-start font-semibold">
            Start Date
          </Label>
          <Input type="date" className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-3.5">
        <div className="col-span-2 mb-2">
          <div className="col-span-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
              <div className="text- col-span-1">
                <Label htmlFor="code" className="text-start font-semibold">
                  Phone Number
                </Label>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="+213" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-black/80">
                        countries codes
                      </SelectLabel>
                      <SelectItem value="213">+213</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3 flex items-end">
                <Input
                  placeholder="Enter phone number"
                  type="tel"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col-reverse items-start gap-3 space-x-2 divide-y-2 divide-amber-700 px-3.5">
        <Switch id="status" />
        <Label htmlFor="status">Status Of This Account</Label>
      </div>
    </form>
  );
};

export default AddParnterForm;
