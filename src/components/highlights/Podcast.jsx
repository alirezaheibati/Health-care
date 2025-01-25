import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nutrition from "./../../assets/nutrition.png";
/**
 * Podcast Component
 *
 * Displays a podcast promotional card with an image, title, description, and play button.
 *
 * Props: None
 */
export default function Podcast() {
  return (
    <div className="w-full h-full relative bg-[#f1da69] text-[#252c62] rounded-xl p-3 sm:p-8">
      <img
        src={nutrition}
        alt="nutrition"
        className="absolute right-2 bottom-2 opacity-50"
      />
      <p className="bg-slate-50 px-2 w-24 mb-2 sm:mb-4 rounded-md">
        <span className="bg-red-400 w-2 h-2 inline-block rounded-full"></span>{" "}
        Podcast
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold z-10 relative">
        Nutrition and
        <br /> Mental Health
      </h2>
      <p className="text-sm z-10 relative">
        The food we eat provides the nutrients that our bodies and brains need
        to function properly.
      </p>
      <button className="w-12 h-12 bg-slate-50 rounded-full absolute left-3 bottom-3 sm:left-8 sm:bottom-8 z-10">
        <FontAwesomeIcon icon={faPlay} className="ml-1" />
      </button>
    </div>
  );
}
