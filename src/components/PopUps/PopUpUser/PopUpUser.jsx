import { useAuth } from "../../../context/useAuth";
import { useTheme } from "../../../context/useTheme";
import {
    PopUpBtn,
    PopUpChangeTheme,
    PopUpInput,
    PopUpUserMail,
    PopUpUserName,
    PopUpUserWrapper,
} from "./PopUpUser.styled";
import { Link } from "react-router-dom";

export function PopUpUser() {
    const { user } = useAuth();
    const { isDark, toggleTheme } = useTheme();

    return (
        <PopUpUserWrapper>
            <PopUpUserName> {user.name} </PopUpUserName>
            <PopUpUserMail> {user.login}</PopUpUserMail>

            <PopUpChangeTheme>
                <p>Темная тема</p>
                <PopUpInput
                    type="checkbox"
                    name="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                />
            </PopUpChangeTheme>

            <Link to="/exit">
                <PopUpBtn type="button">Выйти</PopUpBtn>
            </Link>
        </PopUpUserWrapper>
    );
}
