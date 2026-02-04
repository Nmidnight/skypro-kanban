import { useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark((v) => !v);

    const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

    return (
        <ThemeContext.Provider value={value}>
            <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}
