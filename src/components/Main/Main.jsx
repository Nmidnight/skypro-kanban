import { Column } from "../Column/Column";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
} from "./Main.styled.js";
import { useCards } from "../../context/useCards.js"

export function Main() {

  const { cards } = useCards();
  console.log(cards)

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
