import { useNavigate, useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";
import { useCards } from "../context/useCards";
import { useEffect, useState } from "react";

export function CardPage({ mode }) {
  const [formData, setformData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { deleteCurCard, onCardData, fetchCardData, card, setCard } = useCards();


  useEffect(() => {
    fetchCardData(id);

  }, [id, fetchCardData]);

  const handleDelete = () => {
    deleteCurCard(id);
    navigate("/");
  }
  const handleSave = () => {
    onCardData(id, formData);
    navigate("/");
  }
  const handleClose = () => {
    setformData(null);
    setCard(null);
    navigate('/')

  }
  useEffect(() => {
    setformData(card);
  }, [card])

  return (
    <PopBrowse
      card={formData}
      mode={mode}
      onDelete={handleDelete}
      onEdit={() => navigate(`/edit-card/${id}`)}
      onClose={handleClose}
      onChange={(field, value) =>
        setformData((prev) => ({ ...prev, [field]: value }))
      }
      onSave={handleSave}
      onCancel={() => navigate(`/card/${id}`)}
    />
  );
}
