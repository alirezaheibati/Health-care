import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * SocialMedaiBtn Component
 *
 * Displays a button for social media links using FontAwesome icons.
 *
 * Props:
 * - `icon` (object): The FontAwesome icon to display in the button.
 * - `linkTo` (string): The URL to which the button links.
 */
export default function SocialMedaiBtn({ icon, linkTo }) {
  return (
    <a
      href={linkTo}
      className="w-10 h-10 rounded-full bg-sky-100 text-xl text-[#252c62] flex justify-center items-center"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
