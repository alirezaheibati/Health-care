import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
export default function ShopItem({ item }) {
  const dispatch = useDispatch();
  function itemAddToCartHandler() {
    dispatch(cartActions.addToCart(item));
  }
  return (
    <div className="p-4 rounded-lg w-full max-w-[300px] sm:w-[49%] lg:w-[32%] xl:w-[24%] sm:max-w-[400px] flex flex-col justify-between border-2 bg-white shadow-lg">
      <div>
        <img src={item.image} alt={item.name} className="rounded-lg" />
        <h2 className="my-2 text-xl">{item.name}</h2>
      </div>
      <div>
        {item.amount <= 0 ? (
          <p>Out of Stock</p>
        ) : (
          <div className="flex justify-between items-center">
            <p className="text-lg">
              $
              {item.discount > 0
                ? ((item.price * (100 - item.discount)) / 100).toFixed(2)
                : item.price.toFixed(2)}
            </p>
            {item.discount > 0 ? (
              <p className="text-gray-500">
                $<del>{item.price.toFixed(2)}</del>
              </p>
            ) : (
              ""
            )}
          </div>
        )}
        <button
          className="bg-[#252c62] w-full rounded-lg p-1 text-slate-50 mt-2 disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95"
          disabled={item.amount <= 0}
          onClick={itemAddToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
