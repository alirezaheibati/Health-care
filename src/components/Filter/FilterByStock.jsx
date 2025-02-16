import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";
/**
 * FilterByStock Component
 *
 * Provides a toggle switch to filter shop items based on their stock availability.
 * using dispatches actions to the Redux store to update the filtered items.
 *
 * Props: None
 */
export default function FilterByStock() {
  const dispatch = useDispatch();
  const areInStock = useSelector((state) => state.items.areInStock);

  function handleFilterStockItems() {
    dispatch(itemsActions.setAvailability());
  }
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl">In Stock</h2>
      <div
        htmlFor="in-stock-items"
        onClick={handleFilterStockItems}
        className="relative cursor-pointer border rounded-full p-[2px] w-12 h-[22px]"
      >
        <div
          className={`circle w-4 h-4 rounded-full absolute transition-[left] ${
            areInStock ? "left-[2px] bg-[#3264fe]" : " left-[28px] bg-gray-300"
          } top-[2px]`}
        ></div>
      </div>
    </div>
  );
}
