// ugly code
import { useRef, useState } from 'react';

// using userRef not on Dom elemnt but setInterval value

function Stopwatch() {
  const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

    const intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    
    // // Store the interval ID in state (triggers re-render)
    // setIntervalId(newIntervalId);
  };

  const stopTimer = () => {
//     clearInterval(intervalId);

//     // Clear the interval ID in state (triggers re-render)
//     setIntervalId(null);
//   };

    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;
