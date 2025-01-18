import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
