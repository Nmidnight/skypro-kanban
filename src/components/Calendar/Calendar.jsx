import { CalendarWrapper, CalText, CalTitle } from "./Calendar.styled";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import "./Calendar.css";

function parseYmd(ymd) {
  if (!ymd) return undefined;
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return undefined;
  return new Date(y, m - 1, d);
}

function toYmd(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function Calendar({ value, onChange }) {
  const selectedDate = parseYmd(value);

  return (
    <CalendarWrapper>
      <CalTitle>Даты</CalTitle>

      <DayPicker
        locale={ru}
        className="my-calendar"
        weekStartsOn={1}
        mode="single"
        selected={selectedDate}
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
            Срок исполнения: <span>{value}</span>
          </>
        )}
      </CalText>
    </CalendarWrapper>
  );
}
