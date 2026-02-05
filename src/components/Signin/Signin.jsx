import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FormButton,
    FormGroup,
    FormInput,
    FormLogin,
    ModalBlock,
    ModalTtl,
    SigninContainer,
    SigninModal,
    WrapperSignin,
} from "./Signin.styled";
import { signinUser } from "../../services/api";
import { useAuth } from "../../context/useAuth";
import { notify } from "../../utils/notify";
import { handleValidate } from "../../utils/validate";

export function Signin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { authLogin } = useAuth();
    const isValid = handleValidate([login, password]);

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            if (isValid) {
                const data = await signinUser({ login, password });
                authLogin(data)
                navigate("/");
            } else {
                notify.warn("Заполните все поля")
            }

        }
        catch (err) {
            notify.error(err.response.data.error);
        }
    }


    return (
        <WrapperSignin>
            <SigninContainer>
                <SigninModal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Вход</h2>
                        </ModalTtl>
                        <FormLogin onSubmit={handleSignIn}>
                            <FormInput
                                type="text"
                                placeholder="Эл. почта"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormButton type="submit">Войти</FormButton>
                            <FormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to="/register">Регистрируйтесь здесь</Link>
                            </FormGroup>
                        </FormLogin>
                    </ModalBlock>
                </SigninModal>
            </SigninContainer>
        </WrapperSignin>
    );
}
