import { useDispatch } from "react-redux";
import FilterItems from "./FilterItems";
import ItemsContainer from "./ItemsContainer";
import SortItems from "./SortItems";
import { itemsActions } from "../../store/items-slice";
import { useEffect } from "react";
/**
 * ShopContainer Component
 *
 * Displays the shop's items, allowing users to sort and filter the items.
 * Integrates the SortItems, ItemsContainer, and FilterItems components to provide
 * a comprehensive shopping experience.
 *
 * Props: None
 */
export default function ShopContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadItems() {
      try {
        const responese = await fetch(
          "https://parseapi.back4app.com/classes/ShopItems",
          {
            headers: {
              "X-Parse-Application-Id":
                "Iz7O9D835Yq51vOgGfffJceqQ2Fm9hri2JwVyDGu",
              "X-Parse-REST-API-Key":
                "49U8AGgLP9GzHHz3vGnj2bRVJv256evN5OG9WgeN",
            },
          }
        );
        if (!responese.ok) {
          throw new Error("Fetching items failed");
        }
        const data = await responese.json();
        dispatch(itemsActions.setItems(data.results));
      } catch (err) {
        console.log(err);
      }
    }
    loadItems();
  }, []);
  return (
    <div className="bg-slate-100 mt-2 rounded-xl p-2">
      <SortItems />
      <div className="w-full flex justify-start items-start mt-2">
        <ItemsContainer />
        <FilterItems />
      </div>
    </div>
  );
}
