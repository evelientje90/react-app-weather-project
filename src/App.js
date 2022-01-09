import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <footer>
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