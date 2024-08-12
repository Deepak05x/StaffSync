import React from "react";
import { ThemeSwitcher } from "../context/ThemeProvider";
import { useContext } from "react";

const ThemeToggler = () => {
    const { dark, toggleTheme } = useContext(ThemeSwitcher);

    return (
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </div>
    );
};

export default ThemeToggler;
