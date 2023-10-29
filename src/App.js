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
      <div className="d-flex flex-column p-5">
        <p className="heading-xl">Test</p>
        <p className="heading-l">Test</p>
        <p className="heading-m">Test</p>
        <p className="heading-s">Test</p>
        <p className="body-1">Test</p>
        <p className="body-2">Test</p>
        <button className="btn-dine my-3">Test</button>
        <button className="btn-dine my-3 inactive">Test</button>
        <div className="bg-dark d-flex flex-column p-5 my-5">
          <button className="btn-dine-dark my-3">Test</button>
          <button className="btn-dine-dark my-3 inactive">Test</button>
        </div>
        <input type="text" placeholder="test" value={"Test"} />
        <input
          type="text"
          className="my-5"
          placeholder="test"
        />
        <div className="d-flex flex-column my-5">
          <input
            type="text"
            className="error"
            placeholder="test"
            value={"Test"}
          />
          <span className="input-error">This field is required</span>
        </div>
        <select className="my-5">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select disabled className="my-5">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <input type="number" className="my-5" placeholder="test" value={0} />
        <input type="number" className="my-5" disabled placeholder="test" value={0} />
      </div>
    </>
  );
}

export default App;
