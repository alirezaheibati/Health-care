import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

/**
 * CartItem Component
 *
 * Displays an individual item in the shopping cart with buttons to increase or decrease the item amount.
 *
 * Props:
 * - `item` (object): The item object containing title, price, amount, and image.
 */
export default function CartItem({ item }) {
  const dispatch = useDispatch();
  function increaseitemAmountHandler() {
    dispatch(cartActions.addToCart(item));
  }
  function decreaseitemAmountHandler() {
    dispatch(cartActions.removeFromCart(item.objectId));
  }

  return (
    <li className="py-2 text-xl hover:opacity-90 flex flex-row-reverse justify-start items-stretch gap-[2%] border-b border-solid border-slate-500">
      <img
        src={item.image}
        alt={item.title}
        className="h-auto w-[25%] rounded-lg"
      />
      <div className="flex flex-col justify-between items-end w-[73%]">
        <a
          href="#"
          dir="ltr"
          className="block w-full whitespace-nowrap overflow-hidden text-ellipsis text-left"
        >
          {item.title}
        </a>
        <div className="flex w-full justify-between items-center">
          <p className="">${item.price * item.cartCount}</p>
          <div className="flex justify-center items-center gap-2">
            <button
              className="flex justify-center text-xl items-center bg-slate-900 text-slate-50 w-6 h-6 rounded-full"
              onClick={increaseitemAmountHandler}
            >
              <p className="mb-1 text-2xl">+</p>
            </button>
            <input
              type="number"
              readOnly
              value={item.cartCount}
              className="w-9 text-base h-7 px-[2px] border shadow-lg rounded-md no-arrows outline-none text-center"
            />
            <button
              className="flex text-3xl justify-center items-center bg-slate-900 text-slate-50 w-6 h-6 rounded-full"
              onClick={decreaseitemAmountHandler}
            >
              <p className="-translate-y-[2px]">-</p>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
