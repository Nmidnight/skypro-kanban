import "./Main.css";
import { Column } from "../Column/Column";
import { cardList } from "../../../data.js";

export function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column cards={cardList} title="Без статуса" />
            <Column cards={cardList} title={"Нужно сделать"} />
            <Column cards={cardList} title="В работе" />
            <Column cards={cardList} title={"Тестирование"} />
            <Column cards={cardList} title={"Готово"} />
          </div>
        </div>
      </div>
    </main>
  );
}
