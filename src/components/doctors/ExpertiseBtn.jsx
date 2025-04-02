import { useDispatch, useSelector } from "react-redux";
import { cardsActions } from "../../store/business-card-slice";

/**
 * ExpertiseBtn Component
 *
 * A button component for selecting expertise categories with dynamic styles.
 *
 * Props:
 * - `title` (string): The title of the expertise category.
 * - `image` (string): The URL of the image representing the expertise category.
 * - `isActive` (bool): Indicates whether the button is active or not.
 */
export default function ExpertiseBtn({ title, image }) {
  const activeExperty = useSelector((state) => state.cards.experty);
  const dispatch = useDispatch();
  function expertiesSelectHandler() {
    dispatch(cardsActions.setExperty(title));
  }
  return (
    <li
      className={`${
        activeExperty === title
          ? "text-slate-100 bg-[#252c62]"
          : "bg-slate-100 text-[#252c62]"
      } rounded-full shrink-0`}
      onClick={expertiesSelectHandler}
    >
      <button className="flex justify-center items-center gap-2 px-4 py-2">
        <p>{title}</p>
        <img src={image} alt={title} className="w-12" />
      </button>
    </li>
  );
}
