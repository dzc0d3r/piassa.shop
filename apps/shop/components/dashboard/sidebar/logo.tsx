import Logo from "@/public/piassa.svg";
import Image from "next/image";

const logo = () => {
  return (
    <section className="mt-4 flex flex-row items-center justify-center gap-1">
      <Image
        className="bg-primary h-6 w-6 rounded-md p-1"
        src={Logo}
        alt="piassa log"
      />

      <h3 className="text-xl font-bold uppercase text-white">Piassa</h3>
    </section>
  );
};

export default logo;
