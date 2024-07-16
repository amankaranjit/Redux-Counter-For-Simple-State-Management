import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseCounter: (state) => {
            state.counter += 1
        },
        decreaseCounter: (state) => {
            state.counter -= 1
        }
    }
})

export const { increaseCounter, decreaseCounter } = counterSlice.actions
export default counterSlice.reducer