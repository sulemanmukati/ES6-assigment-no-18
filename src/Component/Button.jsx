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
    <div style={{textAlign:'center'}}>
        <button style={{margin:'5px',paddingLeft:'15px',paddingRight:'15px',fontSize:'30px'}} onClick={handleAction1}>+</button>
        <button style={{paddingLeft:'18px',paddingRight:'18px',fontSize:'30px'}}  onClick={handleAction2}>-</button>
        </div>
  )
}

export default Button