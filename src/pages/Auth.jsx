import { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AuthBtn from "../components/auth/AuthBtn";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

/**
 * AuthPage Component
 *
 * A component that renders the authentication page with options to switch between login and registration forms.
 * It also displays a spinner and error modal based on the application state.
 *
 * @component
 * @returns {JSX.Element} The AuthPage component.
 */
export default function Auth() {
  const [activeComponent, setActiveComponent] = useState(true);

  function handleRenderingActiveComponent(status) {
    if (status === "Login") setActiveComponent(true);
    else setActiveComponent(false);
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute left-0 right-0 top-0 flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 py-6 shadow-md bg-slate-50">
          <Link to={"/projects/healthcare"}>
            <img src={logo} alt="site logo" className="h-12" />
          </Link>
          <div className="flex flex-wrap gap-2 justify-end">
            <AuthBtn
              isActive={activeComponent}
              title={"Login"}
              onActiveBtn={handleRenderingActiveComponent}
            />
            <AuthBtn
              isActive={!activeComponent}
              title={"Register"}
              onActiveBtn={handleRenderingActiveComponent}
            />
          </div>
        </div>
        {activeComponent && <Login onClick={handleRenderingActiveComponent} />}
        {!activeComponent && (
          <Register onClick={handleRenderingActiveComponent} />
        )}
      </div>
    </>
  );
}
