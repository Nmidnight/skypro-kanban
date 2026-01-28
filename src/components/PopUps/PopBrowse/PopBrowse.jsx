import "./PopBrowse.css";
import { Calendar } from "../../Calendar/Calendar";
import { PopBrowseBlock, PopBrowseButton, PopBrowseButtonGroup, PopBrowseButtonsBar, PopBrowseContainer, PopBrowseContent, PopBrowseForm, PopBrowseFormBlock, PopBrowseFormWrap, PopBrowseStatus, PopBrowseStatusTtl, PopBrowseStatusWrapper, PopBrowseTheme, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrapper, TextArea, TopicText } from "./PopBrowse.styled";

export function PopBrowse({ card, mode, onDelete }) {
  const themeColors = {
    "Web Design": { bg: "#ffe4c2", text: "#ff6d00" },
    Research: { bg: "#b4fdd1", text: "#06b16e" },
    Copywriting: { bg: "#e9d4ff", text: "#9a48f1" },
  };

  const task = card?.task ?? {};
  const { bg, text } = themeColors[task.topic] || { bg: "#94a6be", text: "#ffffff" };

  return (
    <PopBrowseWrapper>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{card.task.title}</PopBrowseTtl>
              <PopBrowseTheme $bg={bg}>
                <TopicText $color={text}>
                  {card.task.topic}
                </TopicText>
              </PopBrowseTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatusTtl>
              <p>Статус</p>
              <PopBrowseStatusWrapper>
                <PopBrowseStatus $choosed>
                  <p>{card.task.status}</p>
                </PopBrowseStatus>
              </PopBrowseStatusWrapper>
            </PopBrowseStatusTtl>
            <PopBrowseFormWrap>
              <PopBrowseForm
                id="formBrowseCard"
              >
                <PopBrowseFormBlock>
                  <label htmlFor="textArea01">
                    Описание задачи
                  </label>
                  < TextArea
                    name="text"
                    id="textArea01"
                    readOnly
                    value={card.task.description || ""}
                    placeholder="Введите описание задачи..."
                  ></TextArea>
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseFormWrap>
            <PopBrowseButtonsBar>
              <PopBrowseButtonGroup>
                <PopBrowseButton>
                  Редактировать задачу
                </PopBrowseButton>
                <PopBrowseButton type="button" onClick={onDelete}>
                  Удалить задачу
                </PopBrowseButton>
              </PopBrowseButtonGroup>
              <PopBrowseButton $blueBG>
                Закрыть
              </PopBrowseButton>
            </PopBrowseButtonsBar>
            {/* <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div> */}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
}
