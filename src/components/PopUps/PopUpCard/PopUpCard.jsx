import {
  PopUpCardWrap,
  PopUpCardContainer,
  PopUpCardBlock,
  PopUpCardClose,
  PopUpCardTitle,
  PopUpCardId,
  PopUpCardContent,
  PopUpCardField,
  PopUpCardLabel,
  PopUpCardValue,
  PopUpCardTheme,
} from "./PopUpCard.styled";

export function PopUpCard({ card, onClose }) {
  if (!card) return null;

  const themeColors = {
    "Web Design": { bg: "#ffe4c2", text: "#ff6d00" },
    Research: { bg: "#b4fdd1", text: "#06b16e" },
    Copywriting: { bg: "#e9d4ff", text: "#9a48f1" },
  };

  const { bg, text } = themeColors[card.theme] || {
    bg: "#94a6be",
    text: "#ffffff",
  };

  return (
    <PopUpCardWrap onClick={onClose}>
      <PopUpCardContainer>
        <PopUpCardBlock onClick={(e) => e.stopPropagation()}>
          <PopUpCardClose onClick={onClose} type="button">
            ×
          </PopUpCardClose>

          <PopUpCardTitle>Просмотр карточки</PopUpCardTitle>

          <PopUpCardId>
            ID карточки: <b>{card.id}</b>
          </PopUpCardId>

          <PopUpCardContent>
            <PopUpCardField>
              <PopUpCardLabel>Тема</PopUpCardLabel>
              <PopUpCardTheme $bg={bg} $color={text}>
                {card.theme}
              </PopUpCardTheme>
            </PopUpCardField>

            <PopUpCardField>
              <PopUpCardLabel>Название задачи</PopUpCardLabel>
              <PopUpCardValue>{card.title}</PopUpCardValue>
            </PopUpCardField>

            <PopUpCardField>
              <PopUpCardLabel>Дата</PopUpCardLabel>
              <PopUpCardValue>{card.date}</PopUpCardValue>
            </PopUpCardField>

            <PopUpCardField>
              <PopUpCardLabel>Статус</PopUpCardLabel>
              <PopUpCardValue>{card.status}</PopUpCardValue>
            </PopUpCardField>
          </PopUpCardContent>
        </PopUpCardBlock>
      </PopUpCardContainer>
    </PopUpCardWrap>
  );
}

