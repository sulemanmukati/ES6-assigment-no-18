import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0
};

const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter:(state,action)=>{
            state.counter = ++state.counter
            // console.log("add Counter")
        },
        minusCounter:(state,action)=>{
            state.counter = state.counter >0 ? --state.counter:0 ; 
            // console.log("add Counter")
        }
    }
})

const {actions,reducer} = counterSlice

export const {addCounter,minusCounter} = actions

export default reducer