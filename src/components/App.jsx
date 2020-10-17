import React, {useState} from 'react';

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const [count, setCount] = useState(0);

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h4>{time}</h4>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>  
  );
}

export default App;
