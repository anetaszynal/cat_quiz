import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header
        title="Quiz o kotach"
        additionalContent="- weź udział i sprawdź swoją wiedzę."
      />
      <Quiz />
      <Footer title="Kontakt:" />
    </div>
  );
}

export default App;
