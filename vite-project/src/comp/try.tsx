import React, { useRef } from 'react'

function Try() {
    const h1 = useRef<any>(null);
    const countRef = useRef<number>(0);
    const increment = () => {
        countRef.current += 1;
        h1.current.textContent=`Count: ${countRef.current}`
    }
    return (
        <div>
            <h1 ref={h1}>Count: {countRef.current}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Try
