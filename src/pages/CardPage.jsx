import { useNavigate, useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";
import { useCards } from "../context/useCards";
import { useEffect, useState } from "react";

export function CardPage({ mode }) {
  const [changes, setChanges] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const { deleteCurCard, butEditCard, currentCard, card } = useCards();

  useEffect(() => {
    currentCard(id);
  }, [id, currentCard]);

  const handleDelete = () => {
    deleteCurCard(id);
    navigate("/");
  }
  const handleSave = () => {
    butEditCard(id, changes);
    navigate("/");
  }

  return (
    <PopBrowse
      card={mode === "edit" ? changes : card}
      mode={mode}
      onDelete={handleDelete}
      onEdit={() => navigate(`/edit-card/${id}`)}
      onClose={() => navigate("/")}
      onChange={(field, value) =>
        setChanges((prev) => ({ ...prev, [field]: value }))
      }
      onSave={handleSave}
      onCancel={() => navigate(`/card/${id}`)}
    />
  );
}
