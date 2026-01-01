import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  HeaderLogoImg,
  HeaderNav,
  CreateTaskBtn,
  HeaderUser,
  PopUpUser,
  PopUpUserName,
  PopUpUserMail,
  PopUpInput,
  PopUpChangeTheme,
  PopUpBtn,
} from "./Header.styled.js";
import { useState } from "react";

export function Header() {
  const [clicked, setClicked] = useState(false);

  const isDark = false;

  const logoSrc = isDark ? "images/logo_dark.png" : "images/logo.png";

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
            <CreateTaskBtn id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </CreateTaskBtn>
            <HeaderUser onClick={() => setClicked((clicked) => !clicked)}>
              Ivan Ivanov
            </HeaderUser>

            {clicked && (
              <PopUpUser id="user-set-target">
                <PopUpUserName>Ivan Ivanov</PopUpUserName>
                <PopUpUserMail>ivan.ivanov@gmail.com</PopUpUserMail>
                <PopUpChangeTheme>
                  <p>Темная тема</p>
                  <PopUpInput
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  />
                </PopUpChangeTheme>
                <PopUpBtn type="button">
                  <a href="#popExit">Выйти</a>
                </PopUpBtn>
              </PopUpUser>
            )}
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
