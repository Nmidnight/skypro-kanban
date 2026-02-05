import { useState } from "react";
import { getTopicColors } from "../../../constants/topicColor";
import { Calendar } from "../../Calendar/Calendar";
import {
  PopBrowseBlock,
  PopBrowseButton,
  PopBrowseButtonGroup,
  PopBrowseButtonsBar,
  PopBrowseCategoriesWrap,
  PopBrowseCategoryItem,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseFormWrap,
  PopBrowseInput,
  PopBrowseStatus,
  PopBrowseStatusTtl,
  PopBrowseStatusWrapper,
  PopBrowseTheme,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrapper,
  TextArea,
  TopicText,
} from "./PopBrowse.styled";

export function PopBrowse({
  card,
  mode,
  onDelete,
  onEdit,
  onSave,
  onCancel,
  onClose,
  onChange,
}) {
  const isEdit = mode === "edit";
  const STATUSES = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
  const TOPICS = ["Web Design", "Research", "Copywriting"];


  const { bg, text } = getTopicColors(card?.topic);

  return (
    <PopBrowseWrapper>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {!isEdit && <PopBrowseTtl>{card?.title ?? ""}</PopBrowseTtl>}

              {isEdit && (
                <PopBrowseInput
                  value={card?.title ?? ""}
                  onChange={(e) => onChange("title", e.target.value)}
                />
              )}

              {!isEdit && (
                <PopBrowseTheme $bg={bg}>
                  <TopicText $color={text}>{card?.topic ?? ""}</TopicText>
                </PopBrowseTheme>
              )}
            </PopBrowseTopBlock>

            <PopBrowseStatusTtl>
              <p>Статус</p>
              <PopBrowseStatusWrapper>
                {!isEdit && (
                  <PopBrowseStatus $choosed>
                    <p>{card?.status ?? ""}</p>
                  </PopBrowseStatus>
                )}

                {isEdit && (
                  <PopBrowseStatusWrapper>
                    {STATUSES.map((s) => (
                      <PopBrowseStatus
                        key={s}
                        type="button"
                        $active={card?.status === s}
                        $disabled={!isEdit}
                        onClick={() => onChange("status", s)}
                      >
                        {s}
                      </PopBrowseStatus>
                    ))}
                  </PopBrowseStatusWrapper>
                )}
              </PopBrowseStatusWrapper>
            </PopBrowseStatusTtl>

            <PopBrowseFormWrap>
              <PopBrowseForm>
                <PopBrowseFormBlock>
                  <label>Описание задачи</label>
                  <TextArea
                    readOnly={!isEdit}
                    value={card?.description ?? ""}
                    onChange={(e) => onChange("description", e.target.value)}
                  />
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <Calendar value={card?.date ?? ""} onChange={(ymd) => onChange("date", ymd)} disabled={!isEdit} />
            </PopBrowseFormWrap>

            {isEdit && (
              <PopBrowseCategoriesWrap>
                {TOPICS.map((t) => {
                  const { bg: itemBg, text: itemText } = getTopicColors(t);

                  return (
                    <PopBrowseCategoryItem
                      key={t}
                      type="button"
                      $active={card?.topic === t}
                      $bg={itemBg}
                      $color={itemText}
                      onClick={() => onChange("topic", t)}
                      disabled={!isEdit}
                    >
                      {t}
                    </PopBrowseCategoryItem>
                  );
                })}
              </PopBrowseCategoriesWrap>
            )}

            <PopBrowseButtonsBar>
              {!isEdit && (
                <PopBrowseButtonGroup>
                  <PopBrowseButton onClick={onEdit}>
                    Редактировать задачу
                  </PopBrowseButton>
                  <PopBrowseButton onClick={onDelete}>
                    Удалить задачу
                  </PopBrowseButton>
                </PopBrowseButtonGroup>
              )}

              {isEdit && (
                <PopBrowseButtonGroup>
                  <PopBrowseButton $blueBG onClick={onSave}>
                    Сохранить
                  </PopBrowseButton>
                  <PopBrowseButton onClick={onCancel}>
                    Отменить
                  </PopBrowseButton>
                  <PopBrowseButton onClick={onDelete}>
                    Удалить задачу
                  </PopBrowseButton>
                </PopBrowseButtonGroup>
              )}

              <PopBrowseButton $blueBG onClick={onClose}>
                Закрыть
              </PopBrowseButton>
            </PopBrowseButtonsBar>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
}
