import { useContext } from "react";
import ContextProvider from "../Components/utils/global.context";


const ThemeToggleButton = () => {

  const { theme, handleChangeTheme } = useContext(ContextProvider);

  return (
    <button className="theme-button"
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.font }}
    >
      {theme.background === "black" ? "🌞" : "🌜"}
    </button>
  );
};

export default ThemeToggleButton;
