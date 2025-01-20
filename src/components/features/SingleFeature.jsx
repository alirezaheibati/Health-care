import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/**
 * SingleFeature Component
 *
 * This component displays a single feature card with an image, title, description, and a button.
 * The title supports line breaks within the text.
 *
 * Props:
 * - `bgColor` (string): The background color class for the feature card.
 * - `image` (string): The URL of the image to be displayed.
 * - `title` (string): The title text of the feature, which supports line breaks using "<br />".
 * - `description` (string): The description text of the feature.
 */
export default function SingleFeature({ bgColor, image, title, description }) {
  const formatedText = title.split("<br />");
  return (
    <div
      className={`${bgColor} rounded-3xl w-full sm:w-[49%] lg:w-[24.5%] mb-2 h-[250px] sm:h-[300px] md:h-[350px] relative py-6 px-8  flex flex-col justify-between items-start`}
    >
      <img
        src={image}
        alt={title}
        className="w-1/3 lg:w-2/5 absolute right-4 bottom-4"
      />
      <div>
        <h2 className="text-slate-900 text-3xl">
          {formatedText[0]} <br />
          {formatedText[1]}{" "}
        </h2>
        <p className="text-sm">{description}</p>
      </div>
      <button className="w-12 h-12 rounded-full bg-[#252c62] text-slate-50 text-xl">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
