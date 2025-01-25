import ReviewsBox from "./ReviewsBox.jsx";
import ReviewsAverage from "./ReviewsAverage.jsx";
export default function ReviewContainer() {
  return (
    <section className="py-8 text-[#252c62]">
      <ReviewsAverage />
      <ReviewsBox />
    </section>
  );
}
