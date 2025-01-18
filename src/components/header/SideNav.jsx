import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarCheck,
  faCircleQuestion,
  faGift,
  faHome,
  faStore,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SideNavItem from "./SideNavItem.jsx";
export default function SideNav({ menuVisibility, onCloseNav }) {
  return (
    <div
      className={`h-full w-full z-[1001] fixed top-0 right-0 text-slate-50 ${
        menuVisibility ? "translate-x-0" : "-translate-x-full"
      } ${
        !menuVisibility ? " transition-transform" : " transition-none"
      } duration-300`}
    >
      <div
        className={`h-full w-full bg-black/60 absolute right-0 top-0 z-10 transition-none ${
          !menuVisibility ? " opacity-0" : " opacity-100"
        }`}
        onClick={onCloseNav}
      ></div>
      <div
        className={`h-full w-full max-w-[350px] bg-[#252c62] relative z-20 overflow-hidden flex justify-center flex-col items-end ${
          menuVisibility ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="bg-slate-50 h-full aspect-square rounded-full absolute -right-1/4 -top-3/4"></div>
        <button
          className="text-slate-900 absolute right-2 top-2 text-3xl z-50"
          onClick={onCloseNav}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img
          src={logo}
          alt="site logo"
          className="absolute left-2 top-8 w-3/4 h-auto"
        />
        <div className="w-full pt-48 grow relative text-slate-100 px-4 flex flex-col justify-start items-start">
          <ul>
            <SideNavItem title={"Home"} icon={faHome} linkTo={"./"} />
            <SideNavItem title={"Shop"} icon={faStore} linkTo={"./shop"} />
            <SideNavItem
              title={"Book an appointment"}
              icon={faCalendarCheck}
              linkTo={"./book"}
            />
            <SideNavItem
              title={"FAQs"}
              icon={faCircleQuestion}
              linkTo={"./faqs"}
            />
            <SideNavItem
              title={"Contact"}
              icon={faAddressBook}
              linkTo={"./contactus"}
            />
            <SideNavItem
              title={"Offers"}
              icon={faGift}
              linkTo={"./gift"}
              isSpecial
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
