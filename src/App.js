import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Booking from "./Pages/Booking";
import NotFound from "./Pages/NotFound";
import Confirmation from "./Pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: '/confirmation',
    element: <Confirmation/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
