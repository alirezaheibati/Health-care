import ShopItem from "./ShopItem";
import InnerSpinner from "../ui/InnerSpinner";
import { useSelector } from "react-redux";

export default function ItemsContainer({ isFetching }) {
  const items = useSelector((state) => state.items.items);
  return (
    <div className="p-4 flex justify-center sm:justify-between items-stretch flex-wrap gap-2 w-full md:w-2/3 lg:w-3/4 bg-green-500">
      {isFetching ? (
        <InnerSpinner />
      ) : (
        items.map((item) => <ShopItem key={item.objectId} item={item} />)
      )}
    </div>
  );
}
