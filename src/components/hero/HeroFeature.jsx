import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * HeroFeature Component
 *
 * Displays a feature item with an icon and a description.
 * Props:
 * - `description` (string): The text description of the feature.
 * - `icon` (object): The icon to be displayed.
 * - `bgColor` (string): The background color class for the icon.
 */
export default function HeroFeature({ description, icon, bgColor }) {
  return (
    <div className="flex justify-start items-center gap-2 lg:gap-4 max-w-40 md:max-w-72 bg-gray- text-sky-100">
      <p
        className={`${bgColor} w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center shrink-0 items-center text-xl lg:text-2xl text-slate-900`}
      >
        <FontAwesomeIcon icon={icon} />
      </p>
      <p className="lg:text-lg">{description}</p>
    </div>
  );
}
