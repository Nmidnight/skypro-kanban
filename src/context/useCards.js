import { useContext } from "react";
import { CanbanContext } from "./CanbanContext";

export function useCards() {
    const ctx = useContext(CanbanContext);
    if (!ctx) throw new Error("useCards must be used within AuthProvider");
    return ctx;
}