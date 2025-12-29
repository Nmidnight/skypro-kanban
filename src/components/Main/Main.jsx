import "./Main.css";
import { Column } from "../Column/Column";
import { cardList } from "../../../data.js";
import { useEffect, useState } from "react";

export function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <p>Данные загружаются...</p>
          </div>
        ) : (
          <div className="main__block">
            <div className="main__content">
              <Column cards={cardList} title="Без статуса" />
              <Column cards={cardList} title={"Нужно сделать"} />
              <Column cards={cardList} title="В работе" />
              <Column cards={cardList} title={"Тестирование"} />
              <Column cards={cardList} title={"Готово"} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
