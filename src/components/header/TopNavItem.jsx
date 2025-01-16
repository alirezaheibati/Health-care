/**
 * TopNavItem Component
 *
 * This component renders a navigation item with an icon and title.
 *
 * Props:
 * - title (string): The title of the navigation item.
 * - icon (object): The FontAwesomeIcon to display.
 * - isSpecial (boolean): If true, applies special styling to the item.
 *
 * Example usage:
 * <TopNavItem title="Home" icon={faHouseChimney} isSpecial={true} />
 */
export default function TopNavItem({ title, icon, isSpecial }) {
  return (
    <li className={`group ${isSpecial ? "text-orange-500" : "text-slate-700"}`}>
      <div className="px-3">
        <FontAwesomeIcon icon={icon} className="text-sm mb-[2px] mr-1" />
        <a href="#">{title}</a>
      </div>
      <div className="w-0 bg-slate-700 h-[2px] group-hover:w-full transition-width duration-300 ease-in-out"></div>
    </li>
  );
}
