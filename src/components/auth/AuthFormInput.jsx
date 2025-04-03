import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * AuthFromInput Component
 *
 * A form input component that includes an icon, a label, and an input field.
 *
 * @component
 * @param {function} props.valueHandler - Callback to be invoked when the input value changes.
 * @param {Object} props.icon - The FontAwesome icon to be displayed.
 * @param {string} props.id - The ID of the input field.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.inputValue - The current value of the input field.
 * @param {boolean} props.hasError - Indicates if there is an error with the input value.
 *
 * @returns {JSX.Element} The AuthFromInput component.
 */
export default function AuthFromInput({ icon, id, type, placeholder }) {
  return (
    <div
      className={`w-full h-12 bg-gray-100 p-1 rounded-md flex justify-start items-start gap-1 my-4`}
    >
      <label
        htmlFor={id}
        className="h-10 w-10 shrink-0 bg-white rounded-md flex justify-center items-center text-sky-500"
      >
        <FontAwesomeIcon icon={icon} className={`text-[#252c62]`} />
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`h-10 w-full bg-transparent outline-none p-1 rounded-md grow`}
      />
    </div>
  );
}
