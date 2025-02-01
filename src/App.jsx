import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Shop from "./pages/Shop";
const router = createBrowserRouter([
  {
    path: "projects/healthcare",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
