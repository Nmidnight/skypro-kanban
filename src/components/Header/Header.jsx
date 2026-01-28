import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  HeaderLogoImg,
  HeaderNav,
  CreateTaskBtn,
  HeaderUser,
} from "./Header.styled.js";
import { PopUpUser } from "../PopUps/PopUpUser/PopUpUser";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = false;

  const logoSrc = isDark ? "images/logo_dark.png" : "images/logo.png";

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const displayName = user.name || "Пользователь";

  const handleCreateTask = () => {
    navigate("/add-task", { state: { backgroundLocation: location } });
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <div>
            <a href="" target="_self">
              <HeaderLogoImg src={logoSrc} alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <CreateTaskBtn id="btnMainNew" type="button" onClick={handleCreateTask}>
              <a href="#" onClick={(e) => e.preventDefault()}>Создать новую задачу</a>
            </CreateTaskBtn>
            <HeaderUser onClick={() => setClicked((clicked) => !clicked)}>
              {displayName}
            </HeaderUser>

            {clicked && (
              <PopUpUser />
            )}
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
