import './ChangeColor.css'

import { useEffect, useRef, useState } from 'react'

 function ChangeCollor() {
    const refs = useRef()
    const [color, setColor]= useState(false)
 useEffect(() => {
   setTimeout(() => {
      setColor(!color)
   }, 1000)
   color ? refs.current.style.background = 'red' : refs.current.style.background = 'blue'

 }, [color])  
 console.log(color);
return  (
 <div className='div' ref={refs}></div>
 )
 }

 
export default ChangeCollor