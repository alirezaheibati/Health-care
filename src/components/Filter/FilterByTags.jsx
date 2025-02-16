import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { itemsActions } from "../../store/items-slice";
let tagsList = [];
export default function FilterByTags() {
  const dispatch = useDispatch();
  const filterdTag = useSelector((state) => state.items.tag);
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    let allTags = [];
    items.forEach((item) => {
      allTags = [...allTags, ...item.category];
    });
    const tagsSet = new Set(allTags);
    tagsList = [...tagsSet];
  }, [tagsList]);
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
              checked={tag === filterdTag}
            />
            <label htmlFor={tag}>{tag}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
