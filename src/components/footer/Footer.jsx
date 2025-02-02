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
    <div className="rounded-t-2xl bg-[#252c62] p-4 sm:p-12 pb-0 sm:pb-0">
      <div className="bg-slate-50 rounded-t-2xl p-4 sm:p-8 pb-2 sm:pb-2 flex flex-col md:flex-row gap-4 justify-between items-center">
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
      <p className="bg-slate-50 text-center text-[#252c62] pb-2 text-sm sm:text-base">
        Copyright@2025 -{" "}
        <span className="hidden sm:inline">Designed by Love.</span>Alirezazzz
      </p>
    </div>
  );
}
