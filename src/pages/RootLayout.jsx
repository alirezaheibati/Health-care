import { Outlet } from "react-router-dom";
import TopNav from "../components/header/TopNav";
export default function RootLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}
