/**
 * NOTE: Implement store using plain REDUX (not recommanded)
 */

import { createStore } from 'redux'

const initialState = { counter: 100 }

const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const ADD_VARIABLE_COUNT = 'ADD_VARIABLE_COUNT'
const RESET_COUNT = 'RESET_COUNT'

// state means application state
// action has two parameters 1) type, 2) payload (newState)
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT: {
      const newState = {
        counter: state.counter + 1,
      }

      return newState
    }

    case DECREMENT_COUNT: {
      const newState = {
        counter: state.counter - 1,
      }

      return newState
    }

    case ADD_VARIABLE_COUNT: {
      const newState = {
        counter: state.counter + action.payload,
      }

      return newState
    }

    case RESET_COUNT: {
      const newState = {
        counter: 0,
      }

      return newState
    }
    default: {
      return state
    }
  }

  // Limitation of reducer function
  // 1) react-reducer-function MUST BE SYNCHRONOUS function (no async)
  // 2) It MUST NOT mutate state variable, return newState instead
}

const store = createStore(reducer)

export default store
