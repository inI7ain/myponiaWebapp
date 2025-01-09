import { useState } from 'react'
import Navbar from './modules/navbar/navbar.module'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h2>Hello there!</h2>
          <p>General Kenobi...</p>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div className='carousel'>

        </div>
      </div>
    </>
  )
}

export default App
