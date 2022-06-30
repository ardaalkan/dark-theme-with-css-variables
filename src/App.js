import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import React from "react";
import Navbar from "./components/Navbar";
import LoremIpsum from "./components/LoremIpsum";

function App() {
  return (
    <ThemeProvider className="App">
      <Navbar />
      <LoremIpsum/>
    </ThemeProvider>
  );
}

export default App;
