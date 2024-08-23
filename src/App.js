import React,{useState,useEffect} from 'react'
import './App.css'
import ColorBox from './ColorBox'

const App = () => {
  const [color, setColor] = useState('#FFFFFF')

    useEffect(() => {
        let color = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF6']
        let interval = setInterval(() => {
            setColor(color[Math.floor(Math.random() * color.length)])
        }, 2000)
        return () => clearInterval(interval)
    }, [])
  return (
    <div className='app'>
      <h1>Color Changer</h1>
      <ColorBox color={color}/>
    </div>
  )
}

export default App;