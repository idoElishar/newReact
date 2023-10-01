import React, { useState } from 'react';

function Select(props: any) :any{

    const handleColorChange = (e: any) => {
        props.setColor(e.target.value);
    };

    
  const handleNewColorChange = (e:any) => {
    props.setNewColor(e.target.value);
  };

  
  const addColor = () => {
    if (props.newColor) {
      props.setColorOptions([...props.colorOptions, props.newColor]);
      props.setNewColor('');
    }
    }
    return (
        <div>
            <label htmlFor="cars">Choose a car:</label>
            <select id="cars" name="cars" onChange={handleColorChange}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="white">white</option>
                <option value="green">green</option>
                <option value={props.newColor}>{props.newColor}</option>

            </select>
            <input type="text" value={props.newColor} onChange={handleNewColorChange} placeholder="Add a new color" />
            <button onClick={addColor}>Add</button>
        </div>
    );
}

export default Select
