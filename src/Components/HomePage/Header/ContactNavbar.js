import { SiteEmail, SitePhone } from "@/Components/GeneralComponents/Contact/Contact";
import SocialIcons from "@/Components/GeneralComponents/SocialIcons/SocialIcons";

export default function ContactNavbar() {
  return (
    <div className=" bg-[#1D2027] w-full h-full pl-[10%] pr-[5%]  m-auto flex justify-between items-center text-white">
      <SocialIcons />

      <div className="flex gap-3 justify-center items-center">
        <SiteEmail />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <SitePhone />
      </div>
    </div>
  );
}
