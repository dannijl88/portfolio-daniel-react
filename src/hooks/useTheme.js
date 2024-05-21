import { useState, useEffect } from "react";

export const useTheme = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    };
    
    return { theme, changeTheme };
}