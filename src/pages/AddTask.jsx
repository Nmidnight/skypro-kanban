import { useNavigate, useLocation } from "react-router-dom";
import { PopNewCard } from "../components/PopUps/PopNewCard/PopNewCard";

export function AddTask() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    // если открыли как модалку поверх "фонового" location — возвращаемся туда
    const bg = location.state?.backgroundLocation;
    if (bg) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return <PopNewCard onClose={handleClose} />;
}