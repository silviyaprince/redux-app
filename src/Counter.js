import React, { useState } from 'react'
import { increment,decrement,reset,incrementbyamount } from './slices/counterSlice'
import { useSelector,useDispatch} from 'react-redux'



export  function Counter() {
    const count=useSelector(state=>state.counter.count)
const dispatch=useDispatch()
    const [increase,setIncrease]=useState(0)
    const addValue=Number(increase)||0
    const resetall=()=>{
        setIncrease(0)
        dispatch(reset())
    }
  return (
    <div>
        
      <h3>Counter</h3> 
      <p>{count}</p> 
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
<input type="text" value={increase} onChange={(e)=>setIncrease(e.target.value)}/>
<button onClick={()=>dispatch(incrementbyamount(addValue))}>add amount</button>
<button onClick={resetall}>reset</button>

        </div>
  )
}
