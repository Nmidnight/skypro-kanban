import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar } from "../../Calendar/Calendar";
import { useCards } from "../../../context/useCards";
import { getTopicColors } from "../../../constants/topicColor";
import { handleValidate } from "../../../utils/validate";
import { notify } from "../../../utils/notify";
import { CategoryDescription, CategoryTheme, CategoryThemes, CreateButton, FormInput, FormTextArea, NewCardBlock, NewCardCategories, NewCardContainer, NewCardContent, NewCardForm, NewCardFormBlock, NewCardTTtl, NewCardWrap, NewCardWrapper } from "./PopNewCard.styled";

export function PopNewCard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("")
  const { addNewCard } = useCards();

  const TOPICS = ["Web Design", "Research", "Copywriting"];

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = handleValidate([title, topic, description]);
    if (!isValid) {
      notify.warn("Заполните все поля");
      return;
    }

    await addNewCard({ title, topic, description, date });
    notify.success("Задача успешно создана");
    navigate("/");
  }

  return (
    <NewCardWrapper id="popNewCard">
      <NewCardContainer
        onClick={() => navigate("/")}
      >
        <NewCardBlock
          onClick={(e) => e.stopPropagation()}
        >
          <NewCardContent>
            <NewCardTTtl>Создание задачи</NewCardTTtl>

            <NewCardWrap>
              <NewCardForm
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <NewCardFormBlock>
                  <label htmlFor="formTitle">
                    Название задачи
                  </label>
                  <FormInput
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </NewCardFormBlock>

                <NewCardFormBlock>
                  <label htmlFor="textArea">
                    Описание задачи
                  </label>
                  <FormTextArea
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </NewCardFormBlock>
              </NewCardForm>

              <Calendar value={date} onChange={setDate} />
            </NewCardWrap>

            <NewCardCategories>
              <CategoryDescription>Категория</CategoryDescription>

              <CategoryThemes>
                {TOPICS.map((t) => {
                  const { bg, text } = getTopicColors(t);

                  return (
                    <CategoryTheme
                      key={t}
                      onClick={() => setTopic(t)}
                      style={{
                        backgroundColor: bg,
                        color: text,
                        opacity: topic === t ? 1 : 0.4,
                      }}
                    >
                      <p>{t}</p>
                    </CategoryTheme>
                  );
                })}
              </CategoryThemes>
            </NewCardCategories>

            <CreateButton
              type="submit"
              form="formNewCard"
            >
              Создать задачу
            </CreateButton>
          </NewCardContent>
        </NewCardBlock>
      </NewCardContainer>
    </NewCardWrapper>
  );
}
