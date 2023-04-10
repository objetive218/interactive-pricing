import { useState } from "react";
import "./App.css";
import Titles from "./Titles";
import Form from "./Form";
import Bill from "./Bill";
import List from "./List";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <article className="allbox">
      <ThemeSwitcher />
      <Titles />
      <section className="box">
        <Form />
        <Bill class="billing1" parrafo="Monthly Billing" />
        <Bill class="billing2" parrafo="Yearly Billing" />
        <Bill class="billing3" parrafo="25% discount" />
        <List class="list" />
      </section>
    </article>
  );
}

export default App;
