import { CalendarWrapper, CalText, CalTitle } from "./Calendar.styled";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import "./Calendar.css";
import { formatDateRu, parseToDate, toYmd } from "../../utils/formatDate";


export function Calendar({ value, onChange, disabled }) {
  const selectedDate = parseToDate(value) ?? undefined;

  return (
    <CalendarWrapper>
      <CalTitle>Даты</CalTitle>

      <DayPicker
        locale={ru}
        className="my-calendar"
        weekStartsOn={1}
        mode="single"
        selected={selectedDate}
        disabled={disabled}
        onSelect={(date) => {
          if (!date) return;
          onChange?.(toYmd(date));
        }}
        modifiersStyles={{
          selected: {
            backgroundColor: "#7C8798",
            color: "#fff",
          },
          today: {
            backgroundColor: "#D9DEE6",
            color: "#000",
          },
        }}
      />

      <CalText>
        {!value ? (
          <>Выберите срок исполнения.</>
        ) : (
          <>
            Срок исполнения: <span>{formatDateRu(value)}</span>
          </>
        )}
      </CalText>
    </CalendarWrapper>
  );
}
