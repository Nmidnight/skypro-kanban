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
  const task = card.task;
  const STATUSES = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
  const TOPICS = ["Web Design", "Research", "Copywriting"]

  const themeColors = {
    "Web Design": { bg: "#ffe4c2", text: "#ff6d00" },
    Research: { bg: "#b4fdd1", text: "#06b16e" },
    Copywriting: { bg: "#e9d4ff", text: "#9a48f1" },
  };

  const { bg, text } = themeColors[task.topic] || {
    bg: "#94a6be",
    text: "#ffffff",
  };

  return (
    <PopBrowseWrapper>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {!isEdit &&
                <PopBrowseTtl>{task.title}</PopBrowseTtl>
              }
              {isEdit &&
                <PopBrowseInput
                  value={task.title}
                  onChange={(e) => onChange("title", e.target.value)}
                />
              }
              {!isEdit &&
                <PopBrowseTheme $bg={bg}>
                  <TopicText $color={text}>{task.topic}</TopicText>
                </PopBrowseTheme>
              }
            </PopBrowseTopBlock>

            <PopBrowseStatusTtl>
              <p>Статус</p>
              <PopBrowseStatusWrapper>
                {!isEdit &&
                  <PopBrowseStatus $choosed>
                    <p>{task.status}</p>
                  </PopBrowseStatus>
                }
                {isEdit &&
                  <PopBrowseStatusWrapper>
                    {STATUSES.map((s) => (
                      <PopBrowseStatus
                        key={s}
                        type="button"
                        $active={task.status === s}
                        $disabled={!isEdit}
                        onClick={() => {
                          if (!isEdit) return;
                          onChange("status", s);
                        }}
                      >
                        {s}
                      </PopBrowseStatus>
                    ))}
                  </PopBrowseStatusWrapper>
                }
              </PopBrowseStatusWrapper>
            </PopBrowseStatusTtl>

            <PopBrowseFormWrap>
              <PopBrowseForm>
                <PopBrowseFormBlock>
                  <label>Описание задачи</label>
                  <TextArea
                    readOnly={!isEdit}
                    value={task.description}
                    onChange={(e) =>
                      onChange("description", e.target.value)
                    }
                  />
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseFormWrap>

            {isEdit && (
              <PopBrowseCategoriesWrap>
                {TOPICS.map((t) => {
                  const colors = themeColors[t] ?? { bg: "transparent", text: "#94a6be" };

                  return (
                    <PopBrowseCategoryItem
                      key={t}
                      type="button"
                      $active={task.topic === t}
                      $bg={colors.bg}
                      $color={colors.text}
                      onClick={() => isEdit && onChange("topic", t)}
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
                  <PopBrowseButton onClick={onSave}>
                    Сохранить
                  </PopBrowseButton>
                  <PopBrowseButton onClick={onCancel}>
                    Отменить
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
