import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <List/>
      </div>

    </>
  )
}

export default App


