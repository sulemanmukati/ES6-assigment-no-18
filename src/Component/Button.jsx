import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../store/slices/counterSlice'

const Button = () => {
    const dispatch =useDispatch()

    const handleAction1=()=>{
        dispatch(addCounter())
    }
    const handleAction2=()=>{
        dispatch(minusCounter())
    }
    



  return (
    <div>
        <button onClick={handleAction1}>+</button>
        <button onClick={handleAction2}>-</button>
        </div>
  )
}

export default Button