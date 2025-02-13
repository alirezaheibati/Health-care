import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";

export default function FilterByBrands() {
  const filteredItems = useSelector((state) => state.items.items);
  const brandsSet = new Set(filteredItems.map((item) => item.brand));
  const brandsList = [...brandsSet];
  const dispatch = useDispatch();
  function filterByBrandHandler(e) {
    dispatch(itemsActions.filterItemsByBrand(e.target.value));
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
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
