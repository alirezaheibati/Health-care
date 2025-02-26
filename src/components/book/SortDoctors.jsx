import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cardsActions } from "../../store/business-card-slice";
import { itemsActions } from "../../store/items-slice";

export default function SortDoctors() {
  const dispatch = useDispatch();
  function businessCardsSortHandler(e) {
    dispatch(cardsActions.sortCards(e.target.value));
  }
  function handleShowingFiltersModal() {
    dispatch(itemsActions.toggleFilterModal());
  }
  return (
    <div className="flex justify-start gap-2 items-center">
      <select
        className="h-10 rounded-xl outline-none grow sm:grow-0 sm:w-1/4 border px-1"
        onChange={businessCardsSortHandler}
      >
        <option value={"rate"}>Rate: High to Low</option>
        <option value={"price-asc"}>Price : High to Low</option>
        <option value={"price-desc"}>Price : Low to High</option>
        <option value={"examined"}>Most Examined Patients</option>
      </select>
      <button
        className="bg-white w-10 h-10 sm:w-auto sm:px-4 rounded-xl border md:hidden"
        onClick={handleShowingFiltersModal}
      >
        <span className="hidden sm:inline mr-2">Filter</span>
        <FontAwesomeIcon icon={faFilter} />
      </button>
    </div>
  );
}
