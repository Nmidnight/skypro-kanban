import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar } from "../../Calendar/Calendar";
import "./PopNewCard.css";
import { useCards } from "../../../context/useCards";

export function PopNewCard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  // const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");
  const { addNewCard } = useCards();


  const themeColors = {
    "Web Design": {
      bg: "#ffe4c2",
      text: "#ff6d00",
    },
    Research: {
      bg: "#b4fdd1",
      text: "#06b16e",
    },
    Copywriting: {
      bg: "#e9d4ff",
      text: "#9a48f1",
    },
  };


  async function handleSubmit(e) {
    e.preventDefault();
    await addNewCard({ title, topic, description });


    navigate("/");
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container" onClick={() => navigate("/")}
      >
        <div className="pop-new-card__block" onClick={(e) => e.stopPropagation()}>
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button
              type="button"
              className="pop-new-card__close"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: "#94a6be",
              }}
            >
            </button>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category"
                  onClick={() => setTopic((prev) => (prev === "Web Design" ? "" : "Web Design"))
                  }
                  style={
                    topic === "Web Design"
                      ? {
                        backgroundColor: themeColors["Web Design"].bg,
                        color: themeColors["Web Design"].text,
                        opacity: 1,
                      }
                      : { opacity: 0.4 }
                  }
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green"
                  onClick={() => setTopic((prev) => (prev === "Research" ? "" : "Research"))
                  }
                  style={
                    topic === "Research"
                      ? {
                        backgroundColor: themeColors["Research"].bg,
                        color: themeColors["Research"].text,
                        opacity: 1,
                      }
                      : { opacity: 0.4 }
                  }>
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple"
                  onClick={() => setTopic((prev) => (prev === "Copywriting" ? "" : "Copywriting"))
                  }
                  style={
                    topic === "Copywriting"
                      ? {
                        backgroundColor: themeColors["Copywriting"].bg,
                        color: themeColors["Copywriting"].text,
                        opacity: 1,
                      }
                      : { opacity: 0.4 }
                  }>
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate" onSubmit={handleSubmit} form="formNewCard">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
