import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styles from "./LightDarkModeToggle.module.css";

export default function LightDarkModeToggle() {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    React.useEffect(() => {
        const root = document.documentElement;
        const isDarkMode = theme === "dark";
        // Body
        root.style.setProperty(
            "--main-body-dark",
            isDarkMode ? "hsl(0, 1%, 16%)" : "hsla(0, 0%, 100%, 0.87)"
        );
        // Font
        root.style.setProperty(
            "--main-font",
            isDarkMode ? "hsla(0, 0%, 100%, 0.87)" : "hsl(0, 0%, 0%, 0.87)"
        );
        // Glow
        root.style.setProperty(
            "--main-glow",
            isDarkMode ? "hsl(265, 56%, 79%)" : "hsl(356, 100%, 41%)"
        );
        // Glow Gradient
        root.style.setProperty(
            "--main-glow-gradient",
            isDarkMode ? "hsl(264, 25%, 55%)" : "hsl(0, 79%, 22%)"
        );
        // Main color filter
        root.style.setProperty(
            "--main-custom-filter",
            isDarkMode
                ? "invert(29%) sepia(69%) saturate(400%) hue-rotate(205deg) brightness(95%) contrast(88%)"
                : "brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(5902%) hue-rotate(341deg) brightness(74%) contrast(136%)"
        );
        // Alternative Font
        root.style.setProperty(
            "--alternative-font",
            isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(356, 100%, 41%)"
        );
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (
            prevTheme === "light" 
            ? "dark" : "light"
        ));
    };

    return (
        <>
            <span className={styles.light_dark_mode_toggle}>
                <DarkModeSwitch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    size={28}
                />
            </span>
        </>
    );
}
