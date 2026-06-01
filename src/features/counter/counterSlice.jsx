import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    // Reducer function in input it takes old state and same takes action
    // by using these both action and old state it creates new state
    reducers : {
        // Actions in Reducer Function => increment, decrement, incrementByAmount
        increment : state => {
            state.value += 1
        },
        decrement : state => {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            state.value += Number(action.payload)
        },
        reset : state => {
            state.value = 0
        }
    }
})

export const {increment, decrement, incrementByAmount, reset} =
counterSlice.actions

export default counterSlice.reducer