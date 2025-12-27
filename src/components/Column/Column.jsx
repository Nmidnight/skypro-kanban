import "./Column.css";
import { Card } from "../Card/Card.jsx";

export function Column({ cards, title }) {
  const currColumnCards = cards.filter((card) => card.status === title);
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {currColumnCards.map((card) => (
          <div className="cards__item" key={card.id}>
            <Card theme={card.theme} title={card.title} date={card.date} />
          </div>
        ))}
      </div>
    </div>
  );
}
