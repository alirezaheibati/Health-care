import FilterItems from "./FilterItems";
import ItemsContainer from "./ItemsContainer";
import SortItems from "./SortItems";

export default function ShopContainer() {
  return (
    <div className="bg-slate-100 mt-2 rounded-xl p-2">
      <SortItems />
      <div className="w-full flex justify-start items-start mt-2">
        <ItemsContainer />
        <FilterItems />
      </div>
    </div>
  );
}
