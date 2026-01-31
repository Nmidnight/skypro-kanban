import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard, getCurCard, editCard } from "../services/api";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";

export function CardPage({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();



  const handleDelete = async () => {
    await deleteCard(token, id);
    navigate("/", { replace: true });
  };

  const handleSave = async () => {
    await editCard(token, id, changes);
    navigate("/");
  };

  if (!card || !changes) return null;

  return (
    <PopBrowse
      card={{ task: mode === "edit" ? changes : card.task }}
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
