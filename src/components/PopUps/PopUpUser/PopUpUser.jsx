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
    const user = JSON.parse(localStorage.getItem("user")) || {};

    return (
        <PopUpUserWrapper>
            <PopUpUserName> {user.name} </PopUpUserName>
            <PopUpUserMail> {user.login}</PopUpUserMail>

            <PopUpChangeTheme>
                <p>Темная тема</p>
                <PopUpInput type="checkbox" name="checkbox" />
            </PopUpChangeTheme>

            <Link to="/exit">
                <PopUpBtn type="button">Выйти</PopUpBtn>
            </Link>
        </PopUpUserWrapper>
    );
}
