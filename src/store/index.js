import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'Counter',
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      state.counter += 1 // mutating state: because this slice allows us to do this, (immutability is handeled by them)
      return state
    },
    decrement: function (state, action) {
      state.counter -= 1
      return state
    },
    addVariableCount: function (state, action) {
      state.counter += action.payload
      return state
    },
    resetCounter: function (state, action) {
      state.counter = 0
      return state
    },
  },
})

export const counter_actions = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer,
})
