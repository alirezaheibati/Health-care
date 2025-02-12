import { useSelector } from "react-redux";

export default function FilterByTags() {
  const filteredItems = useSelector((state) => state.items.filterdItems);
  let allTags = [];
  filteredItems.forEach((item) => {
    allTags = [...allTags, ...item.category];
  });
  const tagsSet = new Set(allTags);
  const tagsList = [...tagsSet];
  return (
    <div>
      <h2 className="text-xl mb-1">Tags</h2>
      <ul>
        {tagsList.map((tag) => (
          <li className="mb-1" key={tag}>
            <input
              type="checkbox"
              name="tags"
              id={tag}
              className="mr-1 translate-y-[1px]"
            />
            <label htmlFor={tag}>{tag}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
