import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { deleteCard, getCurCard } from "../services/api";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";


export function CardPage({ mode }) {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const token = localStorage.getItem("token");

  const navigate = useNavigate("/");

  useEffect(() => {
    getCurCard(token, id).then(setCard)
  }, [token, id]);

  const handleDelete = async () => {
    try {
      console.log("delete click", id);
      await deleteCard(token, id);
      navigate("/", { replace: true });
    } catch (e) {
      console.log("delete error:", e);
    }
  };
  if (!card) return null;

  return (
    <PopBrowse card={card} mode={mode} onDelete={handleDelete} />
  );
}
