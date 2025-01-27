import googlePlay from "./../../assets/googlePlay.png";
import appStore from "./../../assets/appStore.png";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedaiBtn from "./SocialMedaiBtn";
/**
 * Footer Component
 *
 * Displays the footer section with links to download the app and social media buttons.
 *
 * Props: None
 */
export default function Footer() {
  return (
    <div className="rounded-t-2xl bg-[#252c62] p-12 pb-0 ">
      <div className="bg-slate-50 rounded-t-2xl p-8 pb-2 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 [&_img]:w-40">
          <a href="#">
            <img src={googlePlay} alt="Google Play" />
          </a>
          <a href="#">
            <img src={appStore} alt="App store" />
          </a>
        </div>
        <div className="flex justify-start items-center gap-2">
          <SocialMedaiBtn icon={faInstagram} linkTo={"#"} />
          <SocialMedaiBtn icon={faTwitter} linkTo={"#"} />
          <SocialMedaiBtn icon={faLinkedinIn} linkTo={"#"} />
        </div>
      </div>
      <p className="bg-slate-50 text-center text-[#252c62] pb-2">
        Copyright@2025 - Designed by Love. Alirezazzz
      </p>
    </div>
  );
}
