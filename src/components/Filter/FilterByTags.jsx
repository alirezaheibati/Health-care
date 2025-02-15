import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";

export default function FilterByTags() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  let allTags = [];
  items.forEach((item) => {
    allTags = [...allTags, ...item.category];
  });
  const tagsSet = new Set(allTags);
  const tagsList = [...tagsSet];

  function handleFilterByTag(e) {
    dispatch(itemsActions.setTag(e.target.value));
  }
  return (
    <div>
      <h2 className="text-xl mb-1">Tags</h2>
      <ul>
        {tagsList.map((tag) => (
          <li className="mb-1" key={tag}>
            <input
              type="radio"
              name="tags"
              value={tag}
              id={tag}
              className="mr-1 translate-y-[1px]"
              onChange={handleFilterByTag}
            />
            <label htmlFor={tag}>{tag}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
