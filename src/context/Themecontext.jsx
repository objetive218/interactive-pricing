import React, {createContext, useState} from "react";

const ThemeContext = createContext("light")
const ThemeProvider = function({children}){
  let [theme, setTheme] = useState("light")
  const changeTheme = function () {
    setTheme(theme == "light" ? "dark" : "light")
  }
  return <ThemeContext.Provider value={[theme,changeTheme]}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
export default ThemeContext