import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Service({ icon, title }) {
  return (
    <p className="text-sm">
      <FontAwesomeIcon icon={icon} className="mr-1" />
      {title}
    </p>
  );
}
