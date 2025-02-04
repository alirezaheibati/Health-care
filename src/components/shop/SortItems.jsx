import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default function SortItems() {
  return (
    <div className="flex justify-start gap-2 items-center">
      <select className="h-10 rounded-xl outline-none grow sm:grow-0 sm:w-80 border px-1">
        <option>most viewed</option>
        <option>Price-Asc</option>
        <option>Price-Dec</option>
        <option>most bought</option>
      </select>
      <button className="bg-white w-10 h-10 sm:w-auto sm:px-4 rounded-xl border md:hidden">
        <span className="hidden sm:inline mr-2">Filter</span>
        <FontAwesomeIcon icon={faFilter} />
      </button>
    </div>
  );
}
