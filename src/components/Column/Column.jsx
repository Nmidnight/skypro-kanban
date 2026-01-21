import {
  ColumnWrapper,
  ColumnTitle,
  ColumnTitleText,
  Cards,
  CardsItem,
} from "./Column.styled.js";
import { Card } from "../Card/Card.jsx";

export function Column({ cards, title }) {
  const currColumnCards = cards.filter((card) => card.status === title);
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <Cards>
        {currColumnCards.map((card) => (
          <CardsItem key={card.id}>
            <Card id={card.id} theme={card.theme} title={card.title} date={card.date} />
          </CardsItem>
        ))}
      </Cards>
    </ColumnWrapper>
  );
}
