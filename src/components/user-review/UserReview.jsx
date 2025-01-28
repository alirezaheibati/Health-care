/**
 * UserReview Component
 *
 * Displays a user review with the reviewer's image, name, and a text review.
 *
 * Props:
 * - `review` (object): The review object containing the reviewer's image, name, and comment.
 * - `isActive` (boolean): Indicates whether the review is active and should be displayed.
 *
 */
export default function UserReview({ review, isActive }) {
  return (
    <div
      className={`border-2 rounded-lg p-2 lg:p-12 w-3/4 mx-auto ${
        isActive ? "flex" : "hidden"
      } justify-between items-center flex-col lg:flex-row`}
    >
      <div className="flex gap-3 justify-start items-center py-4 lg:p-0 lg:w-60">
        <img
          src={review.image}
          alt={review.patient}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p>{review.patient}</p>
          <p className="text-sm text-gray-500 ">patient</p>
        </div>
      </div>
      <div className="h-[2px] w-full lg:h-16 lg:w-[2px] bg-gray-300"></div>
      <div className="lg:w-3/5 py-4 lg:p-0 lg:line-clamp-2 line-clamp-none">
        {review.comment}
      </div>
    </div>
  );
}
