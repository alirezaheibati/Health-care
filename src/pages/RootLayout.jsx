import { Outlet } from "react-router-dom";
import TopNav from "../components/header/TopNav";
/**
 * RootLayout Component
 *
 * Provides a consistent layout with a top navigation bar and a placeholder for nested routes.
 * This component ensures that the `TopNav` component is always visible while displaying
 * different content below it based on the current route.
 */
export default function RootLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}
