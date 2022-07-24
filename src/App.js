import './App.css'
import { useSelector, useDispatch } from 'react-redux/es/exports' // for gettting state.counter
import { counter_actions } from './store/index'

function App() {
  const counter_value = useSelector(function (state) {
    return state.counter
  })
  const dispatcher = useDispatch()

  // Any action (which is passed to dispatcher) contains "type", "payload" parameters
  function increment() {
    // call function directly into dispatcher, rest will be done by dispatcher & react-redux toolkit
    dispatcher(counter_actions.increment())
  }

  function decrement() {
    dispatcher(counter_actions.decrement())
  }

  function addVariableCount(count) {
    dispatcher(counter_actions.addVariableCount(10))
  }

  function resetCounter() {
    dispatcher(counter_actions.resetCounter())
  }

  return (
    <div className="App">
      <h1>React-Redux-toolkit Counter App</h1>
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
