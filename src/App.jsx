import { GlobalStyle } from "./GlobalStyles";
import { AppRoutes } from "./AppRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { CanbanProvider } from "./context/CanbanProvider";

function App() {
  return (
    <AuthProvider>
      <CanbanProvider>
        <GlobalStyle />
        <AppRoutes />
      </CanbanProvider>
    </AuthProvider>
  );
}

export default App;
