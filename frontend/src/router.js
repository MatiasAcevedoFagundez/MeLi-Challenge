import { createBrowserRouter } from "react-router-dom";
import PageFrame from "./components/Navigation/PageFrame";
import SearchResult from "./pages/SearchResult";
import ItemDetail from "./pages/ItemDetail";
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
            element: <SearchResult />,
            loader: async ({ request }) => {
              const search = new URL(request.url).searchParams.get("search");

              const items = await itemsApi.search(search);
              return { searchedItems: items.data };
            }
          },
          {
            path: ":id",
            element: <ItemDetail />,
            loader: async ({ request }) => {
              const pathname = new URL(request.url).pathname;
              const id = pathname.split('/').pop();
              const item = await itemsApi.getItem(id);
              return { detailItem: item.data };
            }
          }
        ]
      }
    ]
  }
]);
