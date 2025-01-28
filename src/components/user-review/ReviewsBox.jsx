import { useEffect, useState } from "react";
import UserReview from "./UserReview";
import PaginationDot from "./PaginationDot";
/**
 * ReviewsBox Component
 *
 * Displays a user review and a series of dots representing the pagination or navigation for reviews.
 *
 * Props: None
 */
export default function ReviewsBox() {
  const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState(null);
  function handleSelectionDot(id) {
    setActiveReview(id);
  }
  useEffect(() => {
    async function loadReviews() {
      try {
        const responese = await fetch(
          "https://parseapi.back4app.com/classes/reviews",
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
          throw new Error("Fetching reviews failed");
        }
        const data = await responese.json();
        setReviews(data.results);
        setActiveReview(data.results[0].objectId);
      } catch (err) {
        console.log(err);
      }
    }
    loadReviews();
  }, []);
  return (
    <>
      {reviews.map((review) => (
        <UserReview
          key={review.patient}
          review={review}
          isActive={review.objectId === activeReview}
        />
      ))}
      <div className="rounded-full bg-gray-100 h-10 w-52 mx-auto mt-4 flex justify-center items-center gap-2">
        {reviews.map((review) => (
          <PaginationDot
            key={review.objectId}
            id={review.objectId}
            isActive={review.objectId === activeReview}
            onSelectDot={handleSelectionDot}
          />
        ))}
      </div>
    </>
  );
}
