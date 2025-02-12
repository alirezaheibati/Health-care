import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
let minPrice;
let maxPrice;

export default function PriceFilter() {
  const filteredItems = useSelector((state) => state.items.filterdItems);
  const priceList = filteredItems.map((item) => item.price);
  const [slideOne, setSlideOne] = useState();
  const [slideTwo, setSlideTwo] = useState();
  useEffect(() => {
    minPrice = Math.min(...priceList);
    maxPrice = Math.max(...priceList);
    setSlideOne(minPrice);
    setSlideTwo(maxPrice);
  }, [filteredItems]);

  function slideOneFn(e) {
    setSlideOne(e.target.value);
    if (e.target.value >= slideTwo) {
      setSlideOne(slideTwo - 1);
    }
  }
  function slideTwoFn(e) {
    setSlideTwo(e.target.value);
    if (e.target.value <= slideOne) {
      setSlideTwo((prev) => slideOne + 1);
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
      <div className="relative w-full py-4 ">
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
          onInput={slideOneFn}
          className="slider absolute left-0 top-2"
        />

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={slideTwo}
          id="slider-2"
          onInput={slideTwoFn}
          className="slider absolute left-0 top-2"
        />
      </div>
    </div>
  );
}
