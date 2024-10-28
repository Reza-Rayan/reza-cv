import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
// Pages
import HomPg from "../pages/Home";
// -----------------------------------------------------

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomPg />,
      },
    ],
  },
]);

export default AppRouter;
