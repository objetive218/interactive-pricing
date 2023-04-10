import React, { useState } from "react";
import FormStyle from "./css/Form.module.css";

const Form = () => {
  const [range, setRange] = useState(50);
  const [toggle, setToggle] = useState(true);
  const value2 = range * 5;
  const click = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <h4 className={FormStyle.page}>{value2 + " pageviews"}</h4>
      <h4 className={FormStyle.month}>{toggle ? range + " /month" : range + " /year"}</h4>
      <label className={FormStyle.form1} for="range">
        <input
          type="range"
          min={toggle ? "1" : "100"}
          max={toggle ? "100" : "500"}
          step={toggle ? "11" : "10"}
          value={range}
          onChange={function (e) {
            e.preventDefault();
            setRange(e.target.value);
          }}
        />
      </label>
      <label
        className={`${toggle ? "" : FormStyle.active} ${FormStyle.form2}`}
        for="type"
        onClick={click}
      >
        <input type="checkbox" />
      </label>
      <form action="#" className={FormStyle.btn} >
        <button>Start my trial</button>
      </form>
    </>
  );
};

export default Form;
