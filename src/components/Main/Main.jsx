import { Column } from "../Column/Column";
import { cardList } from "../../../data.js";
import { useEffect, useState } from "react";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
  Loader,
} from "./Main.styled.js";

export function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrapper>
      <MainContainer>
        {isLoading ? (
          <Loader>
            <p>Данные загружаются...</p>
          </Loader>
        ) : (
          <MainBlock>
            <MainContent>
              <Column cards={cardList} title="Без статуса" />
              <Column cards={cardList} title={"Нужно сделать"} />
              <Column cards={cardList} title="В работе" />
              <Column cards={cardList} title={"Тестирование"} />
              <Column cards={cardList} title={"Готово"} />
            </MainContent>
          </MainBlock>
        )}
      </MainContainer>
    </MainWrapper>
  );
}
