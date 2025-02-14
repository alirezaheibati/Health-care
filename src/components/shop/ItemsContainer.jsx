import ShopItem from "./ShopItem";
import { useSelector } from "react-redux";

export default function ItemsContainer() {
  const items = useSelector((state) => state.items.filterdItems);
  return (
    <div className="p-4 md:pt-0 flex justify-center sm:justify-between items-stretch flex-wrap gap-2 w-full md:w-2/3 lg:w-3/4">
      {items.map((item) => (
        <ShopItem key={item.objectId} item={item} />
      ))}
    </div>
  );
}
