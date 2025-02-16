import { itemsActions } from "../../store/items-slice";
import ShopItem from "./ShopItem";
import { useDispatch, useSelector } from "react-redux";

export default function ItemsContainer() {
  const dispatch = useDispatch();
  const {
    items: allItems,
    brand,
    tag,
    areInStock,
    price,
  } = useSelector((state) => state.items);

  const items = allItems
    .filter((item) => {
      if (brand === "") return true;
      else {
        return brand === item.brand;
      }
    })
    .filter((item) => {
      if (tag === "") return true;
      else {
        return item.category.includes(tag);
      }
    })
    .filter((item) => {
      if (!areInStock) return true;
      else {
        return item.amount > 0;
      }
    })
    .filter((item) => item.price >= price.min && item.price <= price.max);
  dispatch(itemsActions.setFilteredItemsCount(items.length));
  return (
    <div className="p-4 md:pt-0 flex justify-center sm:justify-start items-stretch flex-wrap gap-2 sm:gap-[1%] lg:gap-[2%%] xl:gap-[1.33%] w-full md:w-2/3 lg:w-3/4">
      {items.map((item) => (
        <ShopItem key={item.objectId} item={item} />
      ))}
    </div>
  );
}
