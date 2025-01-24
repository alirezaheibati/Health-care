import UserReview from "./UserReview";
/**
 * ReviewsBox Component
 *
 * Displays a user review and a series of dots representing the pagination or navigation for reviews.
 *
 * Props: None
 */
export default function ReviewsBox() {
  return (
    <>
      <UserReview />
      <div className="rounded-full bg-gray-100 h-10 w-52 mx-auto mt-4 flex justify-center items-center gap-2">
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-600"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
        <div className="rounded-full w-2 h-2 bg-gray-300"></div>
      </div>
    </>
  );
}
