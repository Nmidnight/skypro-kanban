import { Header } from "../components/Header/Header";
import { PopNewCard } from "../components/PopUps/PopNewCard/PopNewCard";

export function AddTask() {
  if (window.innerWidth <= 768) {
    return (
      <>
        <Header />
        <PopNewCard />
      </>
    )
  } else {
    return (
      <PopNewCard />
    );
  }
}