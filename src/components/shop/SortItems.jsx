import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default function SortItems() {
  return (
    <div className="flex justify-start gap-2 items-center">
      <select className="h-10 rounded-xl outline-none grow border px-1">
        <option>most viewed</option>
        <option>Price-Asc</option>
        <option>Price-Dec</option>
        <option>most bought</option>
      </select>
      <button className="bg-white w-10 h-10 rounded-xl border">
        <FontAwesomeIcon icon={faFilter} />
      </button>
    </div>
  );
}
