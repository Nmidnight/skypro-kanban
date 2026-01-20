import { Column } from "../Column/Column";
import { cardList } from "../../../data.js";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
  Loader,
} from "./Main.styled.js";

export function Main() {
  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <MainContent>
            <Column cards={cardList} title="Без статуса" />
            <Column cards={cardList} title={"Нужно сделать"} />
            <Column cards={cardList} title="В работе" />
            <Column cards={cardList} title={"Тестирование"} />
            <Column cards={cardList} title={"Готово"} />
          </MainContent>
        </MainBlock>
      </MainContainer>
    </MainWrapper>
  );
}
