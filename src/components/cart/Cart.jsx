import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { uiActions } from "../../store/ui-slice";

/**
 * Cart Component
 *
 * Displays a shopping cart with options to checkout or close the cart.
 */
export default function Cart() {
  const showCart = useSelector((state) => state.ui.cartVisibility);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  function hideCartHandler() {
    dispatch(uiActions.hideCart());
  }
  return (
    <div
      dir="rtl"
      className={`h-full w-full z-[1001] fixed top-0 right-0 text-slate-900 ${
        showCart ? "translate-x-0" : "translate-x-full"
      } ${
        !showCart ? " transition-transform" : " transition-none"
      } duration-300`}
    >
      <div
        className={`h-full w-full bg-black/60 absolute right-0 top-0 z-10 transition-none ${
          !showCart ? " opacity-0" : " opacity-100"
        }`}
        onClick={hideCartHandler}
      ></div>
      <div
        className={`h-full w-full max-w-[350px] relative z-20 overflow-hidden bg-white ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="relative w-full h-[10%] bg-[#fb6236] flex justify-center items-center">
          <p className="text-slate-50 text-xl md:text-2xl font-bold">
            Shopping Cart
          </p>
        </div>
        <div className="w-full h-[90%] relative px-4 flex flex-col justify-between items-start py-4">
          <ul className="w-full overflow-y-auto h-3/4 px-2">
            {cartItems.map((item) => (
              <CartItem key={item.objectId} item={item} />
            ))}
          </ul>
          <div className="flex justify-between items-center w-full">
            <p className="">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.cartCount, 0)
                .toFixed(2)}
            </p>
            <p className="font-bold text-xl">:Total</p>
          </div>
          <div className=" border-t border-solid border-slate-900 w-full flex justify-between items-center gap-[2%] py-4">
            <button className="w-[49%] py-3 rounded-md bg-[#fb6236] text-slate-50 font-bold">
              Checkout
            </button>
            <button
              className="w-[49%] py-3 rounded-md bg-slate-900 text-slate-50 font-bold"
              onClick={hideCartHandler}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
