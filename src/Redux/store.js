import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'
export const store = configureStore({
    // Registering Reducer in Store
    reducer : {
        counter : counterReducer
    },
})

//  Steps : 
//  1) Create Store 
//  2) wrap app component under provider
//  3) create Slice 
//  4) register reducer in store


