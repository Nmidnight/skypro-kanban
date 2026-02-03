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
import { signupUser } from "../../services/api";
import { notify } from "../../utils/notify";

export function Signup() {
    const [name, setName] = useState("");
    const [login, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();



    async function handleSignUp(e) {
        e.preventDefault();

        if (!name.trim()) {
            notify.warn("Введите имя");
            return;
        }

        const user = {
            login,
            name,
            password,
        };


        try {
            await signupUser(user);
            navigate("/login");
        } catch (err) {
            notify.error(err?.response?.data?.message || "Ошибка регистрации");
        }
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