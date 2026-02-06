import { useNavigate } from "react-router-dom";
import {
  ExitNoButton,
  ExitYesButton,
  PopExitBlock,
  PopExitContainer,
  PopExitForm,
  PopExitFormGroup,
  PopExitTitle,
  PopExitWrap,
} from "./PopExit.styled";
import { useAuth } from "../../../context/useAuth";


export function PopExit() {
  const navigate = useNavigate();
  const { authLogout } = useAuth();
  const handleExit = () => {
    authLogout()
    navigate("/login")

  };

  const handleStay = () => {
    navigate("/", { replace: true });
  };

  return (
    <PopExitWrap>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit">
            <PopExitFormGroup>
              <ExitYesButton id="exitYes" type="button" onClick={handleExit}>
                Да, выйти
              </ExitYesButton>
              <ExitNoButton id="exitNo" type="button" onClick={handleStay}>
                Нет, остаться
              </ExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrap>
  );
}
