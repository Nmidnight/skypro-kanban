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

export function PopExit({ setIsAuth }) {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth?.(false);
    navigate("/login", { replace: true });
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
