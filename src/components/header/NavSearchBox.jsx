import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
/**
 * NavSearchForm Component
 *
 * This component renders a search form with a search button and an input field.
 */
export default function NavSearchBox() {
  return (
    <form className="bg-red-300 h-12 w-96 rounded-full relative ">
      <button className="h-10 w-10 rounded-full bg-[#f1da69] text-slate-900 absolute top-1 left-1 ">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        id=""
        placeholder="Medicite and healthcare items"
        className="w-full pl-[52px] h-full rounded-full bg-white text-lg"
      />
    </form>
  );
}