import { Link } from "react-router-dom";
import {
  NotFoundCard,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrap,
} from "./NotFoundPage.styled";

export function NotFoundPage() {
  return (
    <NotFoundWrap>
      <NotFoundCard>
        <NotFoundTitle>404 — страница не найдена</NotFoundTitle>
        <NotFoundText>Проверьте адрес или вернитесь на главную.</NotFoundText>
        <Link to="/">На главную</Link>
      </NotFoundCard>
    </NotFoundWrap>
  );
}
