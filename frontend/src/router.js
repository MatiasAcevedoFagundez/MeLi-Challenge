import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PageFrame } from "./components/Navigation/PageFrame";
import * as itemsApi from "./api/itemsApi";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <PageFrame />,
    children: [
      {
        path: "another",
        element: (<div>Another Page</div>),
        loader: () => itemsApi.search()
      },
      {
        path: "*",
        element: <HomePage />,
        loader: () => itemsApi.search()
      }
    ]
  }
]);
