import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Booking from "./Pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
