import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header
        title="Quiz o kotach"
        additionalContent="- weź udział i sprawdź swoją wiedzę."
      />
      <Article />
      <Footer title="Kontakt:" />
    </div>
  );
}

export default App;
