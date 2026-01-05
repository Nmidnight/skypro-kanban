import { GlobalStyle } from "./GlobalStyles";
import { PopExit } from "./components/PopUps/PopExit/PopExit";
import { PopNewCard } from "./components/PopUps/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/PopUps/PopBrowse/PopBrowse";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
