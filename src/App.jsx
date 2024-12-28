import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors=['#C0C0C0','#FFFF00','#FF0000','#00FFFF','#000080','#FF00FF'];

  const handleColorChange=(color)=>{
    setBackgroundColor(color);
  };
  return (

      <div className='app' style={{backgroundColor}}>
        <h1>Color Picker</h1>
        <div className='color-palette'>
          {colors.map((color,index)=>(
            <div
            key={index}
            style={{backgroundColor:color}}
            className='colorBox'
            onClick={()=>handleColorChange(color)} 
            ></div>
          ))}
        </div>
        <div className='custom-color-picker'>
          <input
          type='color'
          value={backgroundColor}
          onChange={(e)=>handleColorChange(e.target.value)}>
          </input>

        </div>
      </div>

  )
}

export default App
