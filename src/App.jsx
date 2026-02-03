import { GlobalStyle } from "./GlobalStyles";
import { AppRoutes } from "./AppRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { CanbanProvider } from "./context/CanbanProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <AuthProvider>
      <CanbanProvider>
        <GlobalStyle />
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
        />
      </CanbanProvider>
    </AuthProvider>
  );
}

export default App;
