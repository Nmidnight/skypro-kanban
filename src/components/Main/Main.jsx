import { Column } from "../Column/Column";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
  NoTasksWrapper,
  NoTaskButton,
  LoaderText,
  MobileCreateBtn,
} from "./Main.styled.js";
import { useCards } from "../../context/useCards.js"
import { useNavigate } from "react-router-dom";

export function Main() {
  const { cards, loading } = useCards();
  const navigate = useNavigate();

  if (loading) {
    return <LoaderText>Карточки ещё загружаются</LoaderText>;
  }
  if (cards.length === 0) {
    return (
      <NoTasksWrapper>
        <p> Задач пока нет</p>
        <NoTaskButton
          type="button"
          onClick={() => {
            navigate('/add-task')
          }}
        >
          Добавить задачу?
        </NoTaskButton>
      </NoTasksWrapper>
    )
  }

  const handleCreateTask = () => {
    if (window.innerWidth <= 768) {
      navigate("/add-task")
    }
  }
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
          <MobileCreateBtn onClick={handleCreateTask}>
            Создать новую задачу
          </MobileCreateBtn>
        </MainBlock>
      </MainContainer>
    </MainWrapper>
  );
}
