import { useDispatch, useSelector } from "react-redux";
import { cardsActions } from "../../store/business-card-slice";

export default function FilterByExperties() {
  const dispatch = useDispatch();
  const filterClause = useSelector((state) => state.cards.filterClause);
  function changeExpertiseHandler(e) {
    dispatch(cardsActions.setFilterClause(e.target.value));
  }
  return (
    <div>
      <h2 className="text-xl mb-1">Experties</h2>
      <ul>
        {[
          "All Experties",
          "Cardiologist",
          "Dermatalogist",
          "Internist",
          "Ophthalmologist",
          "Nutritionist",
          "Physiotherapist",
          "Psychiatrist",
          "Neurologist",
        ].map((item) => (
          <li className="mb-1" key={item}>
            <input
              type="radio"
              name="experties"
              value={item}
              id={item}
              className="mr-1 translate-y-[1px]"
              checked={filterClause === item}
              onChange={changeExpertiseHandler}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
