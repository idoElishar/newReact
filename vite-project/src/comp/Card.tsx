import React,{useState} from 'react'
import Select from './Select'
interface example{
    title:string
    pic:string
    text:string
}
function Card(props:example) {
    const [color, setColor] = useState("white");
    const [newColor, setNewColor] = useState('');
    const [colorOptions, setColorOptions] = useState(['red', 'blue', 'white', 'green']);


  return (
    <div style={{background:color}}>
      <h1>{props.title}</h1>
      <img src={props.pic} alt="pic" width={100} />
      <p>{props.text}</p>
      <Select color={color} setColor={setColor} newColor={newColor} setNewColor={setNewColor} colorOptions={colorOptions} setColorOptions={setColorOptions}/>
    </div>
  )
}

export default Card
