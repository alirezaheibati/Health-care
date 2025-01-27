import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
