import { GlobalStyle } from "./GlobalStyles";
import { AppRoutes } from "./AppRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { CanbanProvider } from "./context/CanbanProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/useTheme";


function App() {
  const { isDark } = useTheme();
  return (
    <AuthProvider>
      <CanbanProvider>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme={isDark ? "dark" : "light"}
        />
      </CanbanProvider>
    </AuthProvider>
  );
}

export default App;
