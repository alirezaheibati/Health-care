import ReviewsBox from "./ReviewsBox.jsx";
import ReviewsAverage from "./ReviewsAverage.jsx";
/**
 * ReviewContainer Component
 *
 * Displays a section containing the average reviews rating and a list of user reviews. \
 *
 * Props: None
 */
export default function ReviewContainer() {
  return (
    <section className="py-8 text-[#252c62]">
      <ReviewsAverage />
      <ReviewsBox />
    </section>
  );
}
