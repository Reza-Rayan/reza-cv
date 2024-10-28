import { RouterProvider } from "react-router-dom";
import AppRouter from "./app/config/AppRouter";
// ---------------------------------------------

const App = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default App;
