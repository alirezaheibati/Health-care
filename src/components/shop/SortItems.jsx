import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items-slice";
export default function SortItems() {
  const dispatch = useDispatch();
  function handleSortingItems(e) {
    dispatch(itemsActions.sortItems(e.target.value));
  }
  return (
    <div className="flex justify-start gap-2 items-center">
      <select
        className="h-10 rounded-xl outline-none grow sm:grow-0 sm:w-80 border px-1"
        onChange={handleSortingItems}
      >
        <option value={"date-asc"}>Oldest Arrivals</option>
        <option value={"date-desc"}>Newest Arrivals</option>
        <option value={"price-asc"}>Price : Low to High</option>
        <option value={"price-desc"}>Price: High to Low</option>
      </select>
      <button className="bg-white w-10 h-10 sm:w-auto sm:px-4 rounded-xl border md:hidden">
        <span className="hidden sm:inline mr-2">Filter</span>
        <FontAwesomeIcon icon={faFilter} />
      </button>
    </div>
  );
}
