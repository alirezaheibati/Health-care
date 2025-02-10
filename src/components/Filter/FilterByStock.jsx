import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items-slice";

export default function FilterByStock() {
  const dispatch = useDispatch();
  const [inStock, setInStock] = useState(false);
  function handleFilterStockItems() {
    const newInStock = !inStock;
    setInStock((prev) => !prev);
    dispatch(itemsActions.filterOutOfStockItems(newInStock));
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
            inStock ? "left-[2px] bg-[#3264fe]" : " left-[28px] bg-gray-300"
          } top-[2px]`}
        ></div>
      </div>
    </div>
  );
}
