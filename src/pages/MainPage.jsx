import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Outlet } from "react-router-dom";

export function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Outlet />
    </div>
  );
}
