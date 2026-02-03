import { createContext } from "react";

export const CanbanContext = createContext({
    cards: [],
    signin: false,
    error: "",
});