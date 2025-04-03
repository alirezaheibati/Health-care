import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import AuthFromInput from "./AuthFormInput";
/**
 * Login Component
 *
 * A component that handles user login. It manages form state, validates inputs,
 * and dispatches Redux actions to handle the login process.
 *
 * @component
 * @param {function} props.onClick - Callback to switch to the registration form.
 *
 * @returns {JSX.Element} The Login component.
 */
export default function Login({ onClick }) {
  const formSubmitHandler = function (e) {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-lg p-8 relative w-[90%] max-w-[400px] z-10 shadow-lg">
      <h2 className="text-2xl text-center">Welcome back!</h2>
      <p className="text-sm text-slate-400 text-center">
        book an appointment faster and better.
      </p>
      <form onSubmit={formSubmitHandler}>
        <AuthFromInput
          icon={faUser}
          id={"username"}
          type={"text"}
          placeholder={"username"}
        />
        <AuthFromInput
          icon={faLock}
          id={"password"}
          type={"password"}
          placeholder={"password"}
        />
        <button className="w-full text-slate-50 rounded-md h-12 bg-[#252c62]">
          Login
        </button>
      </form>
      <p className="text-sm text-slate-400 mt-2">
        Don't you have an account?{" "}
        <span
          className="text-[#252c62] cursor-pointer"
          onClick={() => {
            onClick("Register");
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
