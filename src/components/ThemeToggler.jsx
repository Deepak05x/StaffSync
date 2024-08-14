import React from "react";
import { ThemeSwitcher } from "../context/ThemeProvider";
import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggler = () => {
    const { dark, toggleTheme } = useContext(ThemeSwitcher);

    return (
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {dark ? <IoMoonOutline /> : <IoSunnyOutline />}
        </div>
    );
};

export default ThemeToggler;
