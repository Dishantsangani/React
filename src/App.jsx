import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0);
  const [secondcount, setSecontCount] = useState(10)
  useEffect(()=>{
    console.log(" work always")
})
  useEffect(()=>{
      console.log("i um use effect")
  },[]) // one time work -> component  mount
  useEffect(()=>{

    console.log("i am secondcount  use effect")
    return()=>{   // clean up function
      setCount(0)
      console.log(" I am clean up function")
    }
},[secondcount,count]) // secont count state change work -> compoent did update
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSecontCount((secondcount) => secondcount - 1)}>
          count is {secondcount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


function myFunction(a)
{
 let b = a.slice(-3);

return b
}
