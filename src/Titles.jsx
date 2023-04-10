import React,{useContext} from 'react'
import ThemeContext from './context/Themecontext'
import TitleStyle from "./css/Titles.module.css"

const Titles = () => {
  let [theme] = useContext(ThemeContext);
  return (
    <>
    <h1 className={TitleStyle[theme]}>Simple, traffic-based pricing</h1>
    <h3>Sign-up for our 30-day trial. No credit card required.</h3>
    </>
  )
}

export default Titles