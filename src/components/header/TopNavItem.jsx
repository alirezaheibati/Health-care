import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

/**
 * TopNavItem Component
 *
 * This component renders a navigation item with an icon and title.
 *
 * Props:
 * - title (string): The title of the navigation item.
 * - icon (object): The FontAwesomeIcon to display.
 * - isSpecial (boolean): If true, applies special styling to the item.
 * - linkTo (string): The path to which the navigation item links.
 *
 * Example usage:
 * <TopNavItem title="Home" icon={faHouseChimney} isSpecial={true} />
 */
export default function TopNavItem({ title, icon, isSpecial, linkTo }) {
  return (
    <li
      className={`group px-3 ${
        isSpecial ? "text-orange-500" : "text-slate-700"
      }`}
    >
      <NavLink
        to={linkTo}
        end={title === "Home" ? true : false}
        className={({ isActive }) => (isActive ? "[&_div]:w-full" : "")}
      >
        <p>
          <FontAwesomeIcon icon={icon} className="text-sm mb-[2px] mr-1" />
          {title}
        </p>

        <div className="w-0 bg-slate-700 h-[2px] group-hover:w-full transition-width duration-300 ease-in-out"></div>
      </NavLink>
    </li>
  );
}
