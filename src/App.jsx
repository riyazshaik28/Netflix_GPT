import { useState } from 'react'
import Body from './component/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Body />
      </div>
    </>
  )
}

export default App
