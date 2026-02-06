import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  HeaderLogoImg,
  HeaderNav,
  CreateTaskBtn,
  HeaderUser,
  MobileCreateBtn,
} from "./Header.styled.js";
import { PopUpUser } from "../PopUps/PopUpUser/PopUpUser";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth.js";
import { useTheme } from "../../context/useTheme.js";

export function Header() {
  const [clicked, setClicked] = useState(false); ''
  const navigate = useNavigate();
  const location = useLocation();

  const { isDark } = useTheme();


  const logoSrc = isDark ? "/images/logo_dark.png" : "/images/logo.png";

  const { user } = useAuth();
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
            <MobileCreateBtn onClick={handleCreateTask}>
              Создать новую задачу
            </MobileCreateBtn>

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
