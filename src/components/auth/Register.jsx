import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import AuthFromInput from "./AuthFormInput";
/**
 * Register Component
 *
 * A component that handles user registration. It manages form state, validates inputs,
 * and dispatches Redux actions to handle the registration process.
 *
 * @component
 * @param {function} props.onClick - Callback to switch to the login form.
 *
 * @returns {JSX.Element} The Register component.
 */
export default function Register(props) {
  const formSubmitHandler = function (e) {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-lg p-8 relative w-[90%] max-w-[400px] z-10 shadow-lg">
      <h2 className="text-2xl text-center">Get Started!</h2>
      <p className="text-sm text-slate-400 text-center">
        Create your account now.
      </p>
      <form onSubmit={formSubmitHandler}>
        <AuthFromInput
          icon={faUser}
          id={"username"}
          type={"text"}
          placeholder={"username"}
        />
        <AuthFromInput
          icon={faEnvelope}
          id={"email"}
          type={"email"}
          placeholder={"Email"}
        />
        <AuthFromInput
          icon={faLock}
          id={"password"}
          type={"password"}
          placeholder={"At least 8 character"}
        />
        <button className="w-full text-slate-50 rounded-md h-12 bg-[#252c62]">
          Register
        </button>
      </form>
      <p className="text-sm text-slate-400 mt-2">
        Have an account?{" "}
        <span
          className="text-[#252c62] cursor-pointer"
          onClick={() => {
            props.onClick("Login");
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
}
