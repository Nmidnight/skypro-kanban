import { Column } from "../Column/Column";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
  Loader,
} from "./Main.styled.js";
import { useEffect, useState } from "react";
import { fetchCards } from "../../services/api.js"

export function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const token = localStorage.getItem("token");
      const data = await fetchCards(token);
      setCards(data.tasks);
    }

    loadCards();
  }, []);
  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <MainContent>
            <Column cards={cards} title="Без статуса" />
            <Column cards={cards} title={"Нужно сделать"} />
            <Column cards={cards} title="В работе" />
            <Column cards={cards} title={"Тестирование"} />
            <Column cards={cards} title={"Готово"} />
          </MainContent>
        </MainBlock>
      </MainContainer>
    </MainWrapper>
  );
}
