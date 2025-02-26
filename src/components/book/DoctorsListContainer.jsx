import BusinessCard from "../card/BusinessCard";
import { useSelector } from "react-redux";
export default function DoctorsListContainer() {
  const cards = useSelector((state) => state.cards.cards);
  const filterClause = useSelector((state) => state.cards.filterClause);
  const filterdCards = cards.filter((card) => {
    if (filterClause === "All Experties") return true;
    else return filterClause === card.expertise;
  });

  return (
    <ul className="p-1 sm:p-2 md:p-0 md:px-3 lg:px-4 flex justify-center sm:justify-start lg:justify-between items-stretch flex-wrap gap-y-4 w-full md:w-2/3 lg:w-3/4">
      {filterClause.length > 0 &&
        filterdCards.map((card) => (
          <BusinessCard key={card.objectId} card={card} />
        ))}
      {filterdCards.length <= 0 && (
        <p className="text-center bg-white w-full rounded-xl py-4">
          Sorry there is no doctor with your desierd expertise.
        </p>
      )}
    </ul>
  );
}
