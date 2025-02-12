import PriceFilter from "./PriceFilter";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";
import FilterByStock from "./FilterByStock";
import FilterByBrands from "./FilterByBrands";
import FilterByTags from "./FilterByTags";

export default function FilterModal() {
  const dispatch = useDispatch();
  const filtersVisibility = useSelector(
    (state) => state.items.itemsFilterVisibility
  );
  const filterdItems = useSelector((state) => state.items.filterdItems);
  function hideFiltersWindow() {
    dispatch(itemsActions.toggleFilterModal());
  }
  return (
    <div
      className={`bg-white flex flex-col justify-between fixed md:relative w-screen h-screen top-0 left-0 md:block md:w-1/3 lg:w-1/4 p-3 pr-6 md:pr-3 ${
        filtersVisibility
          ? "translate-y-0"
          : "-translate-y-full md:translate-y-0"
      } transition-transform`}
    >
      <div className="grow overflow-y-auto">
        <h2 className="font-semibold text-2xl">Filters</h2>
        <hr className="my-2" />
        <FilterByStock />
        <hr className="my-2" />
        <FilterByBrands />
        <hr className="my-2" />
        <FilterByTags />
        <hr className="my-2" />
        <div>
          <PriceFilter />
        </div>
      </div>
      <div className="md:hidden">
        <button
          className="w-[49%] mr-[2%] rounded-lg py-2 text-[#ef4056] border border-[#ef4056]"
          onClick={hideFiltersWindow}
        >
          Close
        </button>
        <button className="w-[49%] bg-[#ef4056] rounded-lg py-2 text-slate-50">
          View {filterdItems.length} items
        </button>
      </div>
    </div>
  );
}
