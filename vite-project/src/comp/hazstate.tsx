import React, { useRef } from 'react';

function Counter() {
  const countRef = useRef<number>(0);

  const updateCount = () => {
    countRef.current += 1;
    if (divRef.current) {
      divRef.current.textContent = countRef.current.toString();
    }
  };

  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <button onClick={updateCount}>הוסף</button>
      <div ref={divRef}>0</div>
    </div>
  );
}

export default Counter;

