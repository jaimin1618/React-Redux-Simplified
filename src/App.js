import './App.css'
import { useSelector, useDispatch } from 'react-redux/es/exports' // for gettting state.counter

function App() {
  const counter_value = useSelector(function (state) {
    return state.counter
  })
  const dispatcher = useDispatch()

  // Any action (which is passed to dispatcher) contains "type", "payload" parameters
  function increment() {
    const action = { type: 'INCREMENT_COUNT', payload: null }
    dispatcher(action)
  }

  function decrement() {
    const action = { type: 'DECREMENT_COUNT', payload: null }
    dispatcher(action)
  }

  function addVariableCount(count) {
    const action = { type: 'ADD_VARIABLE_COUNT', payload: count }
    dispatcher(action)
  }

  function resetCounter() {
    const action = { type: 'RESET_COUNT', payload: null }
    dispatcher(action)
  }

  return (
    <div className="App">
      <h1>React-Redux Counter App</h1>
      <h2>Counter value: {counter_value}</h2>

      <button className="m btn" type="button" onClick={increment}>
        Increment
      </button>
      <button className="m btn" type="button" onClick={decrement}>
        Decrement
      </button>
      <button
        className="m btn"
        type="button"
        onClick={() => addVariableCount(10)}
      >
        Adding +10
      </button>

      <button className="m btn makeOrange" type="button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  )
}

export default App
