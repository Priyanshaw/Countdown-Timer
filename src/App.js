import { useEffect, useState } from "react";
import "./App.css";

function App() {

  
  return <div className="container">
    <h2>Countdown Timer</h2>
    <label>Select Date and Time to Begin Countdown </label>
    <input type="datetime-local"/>
    <br/>
    <br/>
    <button>Start Timer</button>
    <button>Cancel Timer</button>
    
  </div>;
}

export default App;
