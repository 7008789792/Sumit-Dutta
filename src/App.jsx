import React from "react"; 
import Hero from "./components/Hero/Hero"
import "./App.css"
import Program from "./components/Programs/Program";
import Reason from "./components/Reason/Reason";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reason/>
    </div>
  );
}

export default App;
 