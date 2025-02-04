import product from "../../assets/product-1.jpeg";
export default function ShopItem() {
  return (
    <div className="p-4 rounded-lg w-full max-w-[300px] sm:w-[49%] lg:w-[32%] xl:w-[24%] sm:max-w-[400px] aspect-square block border-2 bg-white shadow-lg">
      <img src={product} alt="shop item" className="rounded-lg" />
      <h2 className="my-2 text-xl">item title</h2>
      <div className="flex justify-between items-center">
        <p className="text-lg">$12.00</p>

        <p className="text-gray-500">
          $<del>24.00</del>
        </p>
      </div>

      <button className="bg-[#252c62] w-full rounded-lg p-1 text-slate-50 mt-2">
        Add to cart
      </button>
    </div>
  );
}
