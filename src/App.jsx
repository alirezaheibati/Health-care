import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Shop from "./pages/Shop";
import Book from "./pages/Book";
import DoctorProfile from "./pages/DoctorProfile";

const router = createBrowserRouter([
  {
    path: "projects/healthcare",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "book-appointment", element: <Book /> },
      { path: "book-appointment/:doctorID", element: <DoctorProfile /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
