import { RiAppsLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { CiMap } from "react-icons/ci";
function NavBar() {
  return (
    <div className="rounded-full bg-zinc-800 text-white w-20 h-screen p-3 flex-column">
      <ul>
        <li className="border-1 my-14 flex justify-center ">
          <RiAppsLine />
        </li>
        <li className="border-1 my-14 flex justify-center ">
          <TbSettings />
        </li>
        <li className="border-1  my-14 flex justify-center ">
          <CiCalendarDate />
        </li>
        <li className="border-1 my-14 flex justify-center ">
          <GrMapLocation />
        </li>
        <li className="border-1 my-14 flex justify-center ">
          <CiMap />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
