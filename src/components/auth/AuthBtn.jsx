/**
 * AuthBtn Component
 *
 * A button component that use to toggle between login and register states.
 *
 * @component
 * @param {boolean} props.isActive - Indicates if the button is active.
 * @param {string} props.title - The title to be displayed within the button.
 * @param {function} props.onActiveBtn - Callback to be invoked when the button is clicked.
 */
export default function AuthBtn({ isActive, title, onActiveBtn }) {
  return (
    <button
      className={`w-20 rounded-md py-1 ${
        isActive ? " bg-[#252c62] text-white" : " bg-gray-200  text-[#252c62]"
      }`}
      onClick={() => {
        onActiveBtn(title);
      }}
    >
      {title}
    </button>
  );
}
