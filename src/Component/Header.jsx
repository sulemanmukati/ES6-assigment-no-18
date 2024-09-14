import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {counter} = useSelector((state)=>state.counterReducer)
    console.log('counter',counter)
  return (
    <div>
        <h1 style={{textAlign:'center',marginTop:'300px'}}>counter : <br/> {counter}</h1>
    </div>
  )
}

export default Header