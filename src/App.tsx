import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Page from "./pages/Page";
import SinglePageError from "./pages/SinglePageError";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/:id",
        element: <Page />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
