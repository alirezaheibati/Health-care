/**
 * PaginationDot Component
 *
 * Displays a clickable dot for pagination, indicating the current active user review.
 *
 * Props:
 * - `id` (number): The unique identifier for the pagination dot.
 * - `isActive` (boolean): Indicates whether the dot is active or not.
 * - `onSelectDot` (function): Callback function to handle the dot selection.
 *
 * Methods:
 * - `handleClick`: Handles the click event and calls the `onSelectDot` function with the dot's `id`.
 */
export default function PaginationDot({ id, isActive, onSelectDot }) {
  function handleClick() {
    onSelectDot(id);
  }
  return (
    <button
      className={`rounded-full w-2 h-2  ${
        isActive ? "bg-gray-600" : "bg-gray-300"
      } `}
      onClick={handleClick}
    ></button>
  );
}
