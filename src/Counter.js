import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementbyamount } from './slices/counterSlice'
export  function Counter() {

const count=useSelector((state)=>state.counter.count)
const[increase,setIncrease]=useState(0)
const resetall=()=>{
    setIncrease(0)
    dispatch(reset())
}
const addValue=Number(increase)||0
const dispatch=useDispatch()
  return (
    <div><h2>Counter</h2>
    {count}
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <input type="text" onChange={(e)=>setIncrease(e.target.value)} value={increase}/>
    <button onClick={()=>dispatch(incrementbyamount(addValue))}>ADD AMT</button>
    <button onClick={resetall}>RESET</button>
    
    </div>
  )
}
