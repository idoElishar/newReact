import React, { useState } from 'react'

function Text() {
  const [color, setColor] = useState("");
    function changeColor() {
        if(color === "white") {
            setColor("black");
        }
        else {
            setColor("white");
        }
    }
    return (
        <div>
            <div style={{color:color}}>
                this is text
            </div>
            <button onClick={changeColor}>click to remove/add text</button>
        </div>
    )
}

export default Text

