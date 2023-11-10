import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import "./styles/main.css";
import StepThree from "./pages/StepThree";
import StepTwo from "./pages/StepTwo";
import StepFour from "./pages/StepFour";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Thanks from "./pages/Thanks";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
