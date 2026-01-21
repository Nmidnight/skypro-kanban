import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cardList } from "../../data.js";
import { PopUpCard } from "../components/PopUps/PopUpCard/PopUpCard";

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const cardId = Number(id);
  const card = cardList.find((c) => c.id === cardId);

  const handleClose = () => {
    // если открыли как модалку поверх "фонового" location — возвращаемся туда
    const bg = location.state?.backgroundLocation;
    if (bg) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return <PopUpCard card={card} onClose={handleClose} />;
}
