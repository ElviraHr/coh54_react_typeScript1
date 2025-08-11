
import type { JSX } from 'react'
import './App.css'
import Sandwich from './Sandwich/Sandwich'

function App():JSX.Element {
  
  return (
    <>
    {/* <div className="app">My First TypeScript Component</div> */}
    <Sandwich />
    </>
  )
}

export default App
