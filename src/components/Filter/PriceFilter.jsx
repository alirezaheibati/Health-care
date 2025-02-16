import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";

let minPrice;
let maxPrice;
export default function PriceFilter() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const [slideOne, setSlideOne] = useState(0);
  const [slideTwo, setSlideTwo] = useState(0);
  useEffect(() => {
    const priceList = items.map((item) => item.price);
    minPrice = Math.min(...priceList);
    maxPrice = Math.max(...priceList);
    dispatch(itemsActions.setPrice({ min: minPrice, max: maxPrice }));
    setSlideOne(minPrice);
    setSlideTwo(maxPrice);
  }, [items]);
  function slideOneFn(e) {
    if (e.target.value >= slideTwo) {
      setSlideOne(slideTwo - 1);

      dispatch(
        itemsActions.setPrice({
          min: slideTwo - 1,
          max: slideTwo,
        })
      );
    } else {
      setSlideOne(e.target.value);
      dispatch(
        itemsActions.setPrice({
          min: e.target.value,
          max: slideTwo,
        })
      );
    }
  }
  function slideTwoFn(e) {
    if (e.target.value <= slideOne) {
      setSlideTwo(slideOne + 1);
      dispatch(
        itemsActions.setPrice({
          min: slideOne,
          max: slideOne + 1,
        })
      );
    } else {
      setSlideTwo(e.target.value);

      dispatch(
        itemsActions.setPrice({
          min: slideOne,
          max: e.target.value,
        })
      );
    }
  }
  return (
    <div>
      <h2 className="text-xl mb-1">Price</h2>
      <div>
        <span id="range1">${slideOne}</span>
        <span> - </span>
        <span id="range2">${slideTwo}</span>
      </div>
      <div className="relative w-full py-4">
        <div
          className={`absolute bg-gray-200 h-2 w-full rounded-lg top-2 `}
        ></div>
        <div
          className={`absolute bg-[#3264fe] h-2 rounded-lg top-2`}
          style={{
            left: `${(slideOne - minPrice) * (100 / (maxPrice - minPrice))}%`,
            right: `${(maxPrice - slideTwo) * (100 / (maxPrice - minPrice))}%`,
          }}
        ></div>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={slideOne}
          id="slider-1"
          onChange={slideOneFn}
          className="slider absolute left-0 top-2"
        />

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={slideTwo}
          id="slider-2"
          onChange={slideTwoFn}
          className="slider absolute left-0 top-2"
        />
      </div>
    </div>
  );
}
