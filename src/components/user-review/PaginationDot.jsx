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
