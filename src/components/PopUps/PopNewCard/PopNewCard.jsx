import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar } from "../../Calendar/Calendar";
import "./PopNewCard.css";
import { useCards } from "../../../context/useCards";
import { getTopicColors } from "../../../constants/topicColor";
import { handleValidate } from "../../../utils/validate";
import { notify } from "../../../utils/notify";

export function PopNewCard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const { addNewCard } = useCards();

  const TOPICS = ["Web Design", "Research", "Copywriting"];

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = handleValidate([title, topic, description]);
    if (!isValid) {
      notify.warn("Заполните все поля");
      return;
    }

    await addNewCard({ title, topic, description });
    notify.success("Задача успешно создана");
    navigate("/");
  }

  return (
    <div className="pop-new-card" id="popNewCard">
      <div
        className="pop-new-card__container"
        onClick={() => navigate("/")}
      >
        <div
          className="pop-new-card__block"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                {TOPICS.map((t) => {
                  const { bg, text } = getTopicColors(t);

                  return (
                    <div
                      key={t}
                      className="categories__theme"
                      onClick={() => setTopic(t)}
                      style={{
                        backgroundColor: bg,
                        color: text,
                        opacity: topic === t ? 1 : 0.4,
                      }}
                    >
                      <p>{t}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="form-new__create _hover01"
              type="submit"
              form="formNewCard"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
