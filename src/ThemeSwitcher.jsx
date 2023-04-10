import React,{useContext} from "react";
import ThemeContext from "./context/Themecontext";
import ThemeStyle from "./css/ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
  let [theme,changeTheme] = useContext(ThemeContext);
  return (
    <label
      className={`${theme == "light" ? "": ThemeStyle.active} ${ThemeStyle.form2}`}
      for="type"
      onClick={changeTheme}
    >
      <input type="checkbox" />
    </label>
  );
};

export default ThemeSwitcher;
