import { Button } from "@piassa/ui/components/button";
import {
  AiOutlineFundProjectionScreen,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { FaHandshakeAngle } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { PiCarSimple, PiGear } from "react-icons/pi";

const NavLinks = () => {
  return (
    <section className="my-7 flex h-full flex-col items-center justify-start">
      <div className="flex flex-col rounded-full bg-black/10 p-1 backdrop-blur-xl">
        <Button className="bg-primary h-9 w-9 !gap-0 !rounded-b-none !rounded-t-full">
          <FaHandshakeAngle className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
        <Button className="h-9 w-9 !rounded-b-full !rounded-t-none bg-transparent">
          <AiOutlineFundProjectionScreen className="!h-5.5 !w-5.5" />
        </Button>
      </div>
      <div className="mt-7 flex flex-1 flex-col gap-3">
        <Button className="bg-primary h-9 w-9 backdrop-blur-xl">
          <FaHandshakeAngle className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
        <Button className="h-9 w-9 bg-white/20 backdrop-blur-xl">
          <GrAppsRounded className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
        <Button className="h-9 w-9 bg-white/20 backdrop-blur-xl">
          <PiCarSimple className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
        <Button className="h-9 w-9 bg-white/20 backdrop-blur-xl">
          <PiGear className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
      </div>
      <div className="mt-7 flex flex-col gap-3">
        <Button className="h-9 w-9 bg-white/20 backdrop-blur-xl">
          <AiOutlinePoweroff className="!h-5.5 !w-5.5 bg-transparent text-white" />
        </Button>
      </div>
    </section>
  );
};

export default NavLinks;
