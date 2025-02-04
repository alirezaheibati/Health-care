import ShopItem from "./ShopItem";

export default function ItemsContainer() {
  return (
    <div className="p-4 flex justify-center sm:justify-between items-stretch flex-wrap gap-2 w-full md:w-2/3 lg:w-3/4 bg-green-500">
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  );
}
