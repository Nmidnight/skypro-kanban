import { useNavigate, useParams } from "react-router-dom";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";
import { useCards } from "../context/useCards";
import { useEffect, useState } from "react";
import { handleValidate } from "../utils/validate";
import { notify } from "../utils/notify";

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
    if (!formData) return;

    const isValid = handleValidate([
      formData.title,
      formData.description,
    ]);

    if (!isValid) {
      notify.warn("Заполните все поля");
      return;
    }

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
