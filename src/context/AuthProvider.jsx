import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkUserInfo } from "../utils/checkUserInfo";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => checkUserInfo());
    const token = user?.token;
    const updateUserInfo = (userData) => {
        setUser(userData.user);
        if (userData) {
            localStorage.setItem("userInfo", JSON.stringify(userData.user));
        } else {
            localStorage.removeItem("userInfo");
        }
    };

    const authLogin = (loginData) => {
        updateUserInfo(loginData);
        return true;
    };

    const authLogout = () => {
        updateUserInfo(null);
        return true;
    };
    return (
        <AuthContext.Provider value={{ user, token, authLogin, authLogout, updateUserInfo }}>
            {children}
        </AuthContext.Provider>
    );


}
