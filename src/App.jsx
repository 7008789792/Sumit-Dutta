import React from "react"; 
import Hero from "./components/Hero/Hero"
import "./App.css"
import Program from "./components/Programs/Program";
import Reason from "./components/Reason/Reason";
import Plan from "./components/Plan/Plan";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reason/>
      <Plan/>
    </div>
  );
}

export default App;
 