import {
    FormButton,
    FormGroup,
    FormInput,
    FormLogin,
    Modal,
    ModalBlock,
    ModalTtl,
    SignupContainer,
    Wrapper,
} from "./Signup.styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
    const [name, setName] = useState("");
    const [login, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Введите имя");
            return;
        }

        const user = {
            name,
            login,
            password,
        };

        localStorage.setItem("user", JSON.stringify(user));

        navigate("/login");
    };

    return (
        <Wrapper>
            <SignupContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>
                        <FormLogin onSubmit={handleSignUp} id="formLogUp" action="#">
                            <FormInput
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <FormInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                                value={login}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormButton type="submit" id="SignUpEnter">
                                Зарегистрироваться
                            </FormButton>
                            <FormGroup>
                                <p>
                                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                                </p>
                            </FormGroup>
                        </FormLogin>
                    </ModalBlock>
                </Modal>
            </SignupContainer>
        </Wrapper>
    );
}