import { RouterProvider } from "react-router-dom";
import AppRouter from "./app/config/AppRouter";
import ClientThemeWrapper from "./ClientThemeWrapper";
import { ThemeProvider } from "./contexts/ThemeContext";
// ---------------------------------------------

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ClientThemeWrapper>
          <RouterProvider router={AppRouter} />
        </ClientThemeWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
