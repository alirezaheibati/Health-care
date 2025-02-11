import { useSelector } from "react-redux";

export default function FilterByBrands() {
  const filteredItems = useSelector((state) => state.items.filterdItems);
  const brandsSet = new Set(filteredItems.map((item) => item.brand));
  const brandsList = [...brandsSet];

  return (
    <div>
      <h2 className="text-xl mb-1">Brands</h2>
      <ul>
        {brandsList.map((item) => (
          <li className="mb-1" key={item}>
            <input
              type="radio"
              name="brands"
              id={item}
              className="mr-1 translate-y-[1px]"
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
