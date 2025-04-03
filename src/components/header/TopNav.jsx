import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faCalendarCheck,
  faCartShopping,
  faCircleQuestion,
  faHouseChimney,
  faRightToBracket,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import NavSearchBox from "./NavSearchBox.jsx";
import TopNavItem from "./TopNavItem.jsx";
import { useState } from "react";
import Cart from "../cart/Cart.jsx";
import SideNav from "./SideNav.jsx";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import { useNavigate } from "react-router-dom";

/**
 * TopNav Component
 *
 * Displays the top navigation bar with a logo, search box, and navigation items.
 * Includes a shopping cart button that toggles the cart's visibility.
 */
export default function TopNav() {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  function userAuthHandler() {
    navigate("/projects/healthcare/auth");
  }
  function handleShowCart() {
    dispatch(uiActions.showCart());
  }
  function handleCloseNav() {
    setShowNav(false);
  }
  function handleShowNav() {
    setShowNav(true);
  }
  return (
    <>
      <Cart />
      <SideNav menuVisibility={showNav} onCloseNav={handleCloseNav} />
      <nav className="bg-gray-100 p-3 pb-1 lg:px-6 w-full rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <a href="#">
              <img src={logo} alt="site logo" className="h-12" />
            </a>
            <NavSearchBox />
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-4 flex-row-reverse md:flex-row">
            <button
              className="text-gray-600 justify-start items-center gap-4 border-2 px-2 py-1 rounded-md border-gray-400 hidden md:flex"
              onClick={userAuthHandler}
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <p>Login | Register</p>
            </button>
            <button
              className="lg:text-3xl text-2xl md:hidden ml-2 md:ml-0"
              onClick={handleShowNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <p className="lg:text-3xl text-2xl text-gray-600">&nbsp;|</p>
            <button
              className="lg:text-3xl text-2xl text-gray-600"
              onClick={handleShowCart}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
        <ul className="mt-3 text-lg md:flex justify-start items-center hidden">
          <TopNavItem
            title={"Home"}
            icon={faHouseChimney}
            linkTo={"/projects/healthcare"}
          />
          <TopNavItem
            title={"Shop"}
            icon={faShop}
            linkTo={"/projects/healthcare/shop"}
          />
          <TopNavItem
            title={"Book an appointment"}
            icon={faCalendarCheck}
            linkTo={"/projects/healthcare/book-appointment"}
          />
          <TopNavItem
            title={"FAQs"}
            icon={faCircleQuestion}
            linkTo={"/projects/healthcare/FAQs"}
          />
          <TopNavItem
            title={"Contact"}
            icon={faAddressBook}
            linkTo={"/projects/healthcare/contact"}
          />
        </ul>
      </nav>
    </>
  );
}
