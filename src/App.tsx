import { Counter } from './components/Counter'
import { User } from './components/User'

import { TimerParent } from './components/TimerParent'
import { CounterReducer } from './components/CounterReducer'

import { Form } from './components/Form'

export const App = () => {

  return (
    <>
      <h1>React - TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerParent />

      <h2>useReducer</h2>
      <hr />
      <CounterReducer />

      <h2>CustomHooks</h2>
      <hr />
      <Form />
      <br /><br /><br /><br /><br />
    </>

  )
}
