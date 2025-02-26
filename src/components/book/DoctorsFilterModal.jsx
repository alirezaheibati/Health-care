import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";
import FilterByExperties from "./FilterByExperties";
export default function DoctorsFilterModal() {
  const dispatch = useDispatch();
  const filtersVisibility = useSelector(
    (state) => state.items.itemsFilterVisibility
  );
  const cards = useSelector((state) => state.cards.cards);
  const filterClause = useSelector((state) => state.cards.filterClause);
  const filterdCards = cards.filter((card) => {
    if (filterClause === "All Experties") return true;
    else return filterClause === card.expertise;
  });
  function hideFiltersWindow() {
    dispatch(itemsActions.toggleFilterModal());
  }
  return (
    <div
      className={`bg-white md:rounded-2xl first-letter: flex flex-col justify-between fixed md:relative w-screen h-screen md:h-auto top-0 left-0 md:block md:w-1/3 lg:w-1/4 p-3 pr-6 md:pr-3 ${
        filtersVisibility
          ? "translate-y-0"
          : "-translate-y-full md:translate-y-0"
      } transition-transform`}
    >
      <div className="grow overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">Filters</h2>
        </div>
        <hr className="my-2" />
        <FilterByExperties />
      </div>
      <div className="md:hidden">
        <button
          className="w-[49%] mr-[2%] rounded-lg py-2 text-[#ef4056] border border-[#ef4056]"
          onClick={hideFiltersWindow}
        >
          Close
        </button>
        <button
          className="w-[49%] bg-[#ef4056] rounded-lg py-2 text-slate-50"
          onClick={hideFiltersWindow}
        >
          View {filterdCards.length} items
        </button>
      </div>
    </div>
  );
}
