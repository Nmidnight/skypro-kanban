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
    navigate("/add-task", {
      state: { backgroundLocation: location },
    });
  };

  const hadleNavigate = () => {
    navigate("/")
  }


  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <div>
            <a href="" target="_self">
              <HeaderLogoImg src={logoSrc} alt="logo"
                onClick={hadleNavigate} />
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
