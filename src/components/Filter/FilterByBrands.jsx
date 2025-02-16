import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import { itemsActions } from "../../store/items-slice";
let brandsList = [];
export default function FilterByBrands() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const selectedBrand = useSelector((state) => state.items.brand);

  useEffect(() => {
    const brandsSet = new Set(items.map((item) => item.brand));
    brandsList = [...brandsSet];
  }, [brandsList]);
  function filterByBrandHandler(e) {
    dispatch(itemsActions.setBrand(e.target.value));
  }
  return (
    <div>
      <h2 className="text-xl mb-1">Brands</h2>
      <ul>
        {brandsList.map((item) => (
          <li className="mb-1" key={item}>
            <input
              type="radio"
              name="brands"
              value={item}
              id={item}
              className="mr-1 translate-y-[1px]"
              onChange={filterByBrandHandler}
              checked={item === selectedBrand}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
