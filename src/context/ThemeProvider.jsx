import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";
export function ThemeProvidder({ children }) {

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark((v) => !v);

    const value = useMemo(
        () => ({ isDark, toggleTheme }),
        [isDark]
    );

    return (
        <ThemeContext.Provider value={value} theme={isDark ? darkTheme : lightTheme}>
            {children}
        </ThemeContext.Provider>
    );
}