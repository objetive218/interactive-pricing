import React,{useContext} from 'react'
import ThemeContext from './context/Themecontext';

const Bill = (props) => {
  let [theme] = useContext(ThemeContext);
  return (
    <p className={`${props.class} ${theme}`}>{props.parrafo}</p>
    
  )
}

export default Bill