import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurCard } from "../services/api";
import { PopBrowse } from "../components/PopUps/PopBrowse/PopBrowse";


export function CardPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const token = localStorage.getItem("token");


  useEffect(() => {
    getCurCard(token, id).then(setCard)
  }, [token, id]);

  if (!card) return null;

  return (
    <PopBrowse card={card} />
  );
}
