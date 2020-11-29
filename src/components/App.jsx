import React, { useState } from "react";

let t = new Date().toLocaleTimeString();

function App() {
  const [time, setTime] = useState(t);

  function currentTime() {
    t = new Date().toLocaleTimeString();
    return setTime(t);
  }

  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
