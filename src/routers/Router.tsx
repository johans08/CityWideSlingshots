import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages";
import { NotFound, SpecificError } from "../Error";

export const router = createBrowserRouter([
  {
  path: "",
    element: (
        <HomePage />
    ),
    errorElement: <SpecificError/>,
  },
    {
    path: "*",
    element: <NotFound />,
  },
])