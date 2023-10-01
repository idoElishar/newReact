import React, { useRef } from 'react'

function Try2() {
    const h1 = useRef<any>(null)
    const h2 = useRef<any>(0)
    function add1() {
        h2.current++
        h1.current.innerText = h2.current
    }
    function make0() {
        h2.current=0
        h1.current.innerText = h2.current
    }
    return (
        <div>
            <h1 ref={h1}>0</h1>
            <button onClick={add1}>click to add 1</button>
            <button onClick={make0}>click to do 0</button>
        </div>
    )
}

export default Try2
