import { createContext } from "react";

export const CanbanContext = createContext({
    card: [],
    signin: false,
    error: "",
});