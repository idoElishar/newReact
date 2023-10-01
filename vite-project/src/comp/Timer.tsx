import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: any=null;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  return (
    <div>
      <h2>טיימר</h2>
      <p>{time} שניות</p>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        disabled={isRunning}
      />
      <button onClick={startTimer} disabled={isRunning}>
        start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        stop
      </button>
      <button onClick={resetTimer} disabled={isRunning}>
        do 0
      </button>
    </div>
  );
};

export default Timer;
