import { useEffect, useState } from "react";
import UserReview from "./UserReview";
import PaginationDot from "./PaginationDot";
/**
 * ReviewsBox Component
 *
 * Displays a user review and a series of dots representing the pagination or navigation for reviews.
 *
 * State:
 * - `reviews` (array): An array of review objects fetched from the API.
 * - `activeReview` (string|null): The ID of the currently active review.
 *
 * Props: None
 */
export default function ReviewsBox() {
  const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState();

  // Sets the active review based on the selected dot's ID
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
  // Sets up an interval to automatically change the active review at set intervals.
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setActiveReview((prevReviewId) => {
        const currentIndex = reviews.findIndex(
          (review) => review.objectId === prevReviewId
        );
        const nextIndex = (currentIndex + 1) % reviews.length;
        return reviews[nextIndex].objectId;
      });
    }, 3000);
    return () => clearInterval(interval);
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
