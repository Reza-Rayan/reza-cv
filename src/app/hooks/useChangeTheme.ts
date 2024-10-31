import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const useChangeTheme = () => useContext(ThemeContext);
