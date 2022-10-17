import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const[count,setCount]=useState(0)
    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        if (count !==0){
        setCount(count - 1)
        }
    }
    
  return (
    <div className='counter'>
        <h1>Counter</h1>
        <div className='count'>{count}</div>
        <div>
          <button className='bt_increase' onClick={increase}>increase</button>
          <button className='bt_decrease' onClick={decrease} >decrease</button>
        </div>
    </div>

  )
}
export default Counter
