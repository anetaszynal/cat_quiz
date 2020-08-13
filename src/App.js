import React from "react";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header
        title="Quiz o kotach"
        additionalContent="- weź udział i sprawdź swoją wiedzę."
      />
    </div>
  );
}

export default App;
