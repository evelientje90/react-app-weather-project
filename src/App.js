import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container d-flex">
        <Weather defaultCity="Amsterdam" />
        <footer className="	d-flex justify-content-between mb-5 d-none d-lg-flex">
          This project was coded by Evelina Kupryte and is open-sourced on {" "}
        <a
        href="https://github.com/evelientje90/react-app-weather-project"
        target="_blank"
        rel="noopener noreferrer"
        >
          GitHub
      </a>{" "}
      and hosted on {" "}
      <a
       href="https://elated-mestorf-fe049f.netlify.app//"
      target="_blank"
      rel="noopener noreferrer"
      >Netlify</a>
</footer>
</div>
    </div>
  );
}