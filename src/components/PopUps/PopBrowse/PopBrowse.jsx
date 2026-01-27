import { Calendar } from "../../Calendar/Calendar";
import {
  PopBrowseBlock,
  PopBrowseButtons,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseFormWrap,
  PopBrowseStatus,
  PopBrowseStatusBlock,
  PopBrowseStatusLabel,
  PopBrowseStatusWrapper,
  PopBrowseTextArea,
  PopBrowseTheme,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrapper,
  TopicText,
  BtnBor,
  BtnBg,
  Hidden,
} from "./PopBrowse.styled";

export function PopBrowse({ card }) {
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
              <PopBrowseTtl>{task.title}</PopBrowseTtl>
              <PopBrowseTheme $bg={bg}>
                <TopicText $color={text}>{task.topic}</TopicText>
              </PopBrowseTheme>
            </PopBrowseTopBlock>

            <PopBrowseStatusBlock>
              <PopBrowseStatusLabel className="subttl">Статус</PopBrowseStatusLabel>
              <PopBrowseStatusWrapper>
                <PopBrowseStatus>
                  <p>{task.status}</p>
                </PopBrowseStatus>
              </PopBrowseStatusWrapper>
            </PopBrowseStatusBlock>

            <PopBrowseFormWrap>
              <PopBrowseForm id="formBrowseCard">
                <PopBrowseFormBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <PopBrowseTextArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={task.description || ""}
                  />
                </PopBrowseFormBlock>
              </PopBrowseForm>

              <Calendar />
            </PopBrowseFormWrap>

            <PopBrowseButtons>
              <div className="btn-group">
                <BtnBor type="button">Редактировать задачу</BtnBor>
                <BtnBor type="button">Удалить задачу</BtnBor>
              </div>
              <BtnBg type="button">Закрыть</BtnBg>
            </PopBrowseButtons>

            <Hidden>
              <PopBrowseButtons>
                <div className="btn-group">
                  <BtnBg type="button">Сохранить</BtnBg>
                  <BtnBor type="button">Отменить</BtnBor>
                  <BtnBor type="button">Удалить задачу</BtnBor>
                </div>
                <BtnBg type="button">Закрыть</BtnBg>
              </PopBrowseButtons>
            </Hidden>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
}
