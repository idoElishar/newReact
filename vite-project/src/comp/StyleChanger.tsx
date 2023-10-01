import React, { useRef } from 'react'

function StyleChanger() {
    const color1 = useRef<String>("blue")
    const color2 = useRef<String>("red")
    const div1 = useRef<any>(null)
    const div2 = useRef<any>(null)
    const text1 = useRef<String>("blue")
    const text2 = useRef<String>("red")
    function changeWhite() {
        color1.current = "white"
        color2.current = "white"
        div1.current.style.backgroundColor = color1.current
        div2.current.style.backgroundColor = color2.current
    }
    function changeColors() {
        if (text1.current === "blue") {
            text1.current = "red"
            text2.current = "blue"
            div1.current.innerText = `i am a ${text1.current}`
            div2.current.innerText = `i am a ${text2.current}`
        }
        else {
            text1.current = "blue"
            text2.current = "red"
            div1.current.innerText = `i am a ${text1.current}`
            div2.current.innerText = `i am a ${text2.current}`
        }
    }
    return (
        <div>
            <div ref={div1} style={{ background: `${color1.current}` }}>i am a {text1.current}</div>
            <div ref={div2} style={{ background: `${color2.current}` }}>i am a {text2.current} </div>
            <button onClick={changeWhite}>click to white</button>
            <button onClick={changeColors}>click to changeColors</button>
        </div>
    )
}

export default StyleChanger
