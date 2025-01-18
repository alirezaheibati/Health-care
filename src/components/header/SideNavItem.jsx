import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * SideNavItem Component
 *
 * Displays an individual navigation item with an icon and a title.
 * Props:
 * - `icon` (object): The icon to be displayed.
 * - `title` (string): The title of the navigation item.
 * - `linkTo` (string): The URL the navigation item links to.
 * - `isSpecial` (bool): If true, applies a special styling to the item.
 */
export default function SideNavItem({ icon, title, linkTo, isSpecial }) {
  return (
    <li
      className={`mb-4 text-xl hover:opacity-90 flex justify-start items-center gap-4 ${
        isSpecial ? "text-orange-500" : "text-slate-50"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="text-base" />
      <a href={linkTo}>{title}</a>
    </li>
  );
}
