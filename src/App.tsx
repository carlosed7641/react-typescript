import { Counter } from './components/Counter'
import { User } from './components/User'

import { TimerParent } from './components/TimerParent'

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
    </>

  )
}
