import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }) {
    const [ theme, setTheme ] = useState("light");
    
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                { children }
            </ThemeContext.Provider>
        </div>
    )
}