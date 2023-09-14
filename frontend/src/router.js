import { createBrowserRouter } from "react-router-dom";
import PageFrame from "./components/Navigation/PageFrame";
import * as itemsApi from "./api/itemsApi";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <PageFrame />,
    children: [
      {
        path: "",
      },
      {
        path: "items",
        children: [
          {
            path: "",
            element: <div>Search result Page</div>,
            loader: async ({ request }) => {
              const search = new URL(request.url).searchParams.get("search");

              const items = await itemsApi.search(search);
              console.log(items);
              return { items };
            }
          },
          {
            path: ":id",
            element: <div>Detail Page</div>
          }
        ]
      }
    ]
  }
]);
