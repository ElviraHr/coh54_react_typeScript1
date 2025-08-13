
import type { JSX } from 'react'
import './App.css'
// lessons
import Lesson_06 from './lessons/Lesson06/Lesson_06'

// consultations
// import Sandwich from './Sandwich/Sandwich'

function App():JSX.Element {
  
  return (
    <>
    {/* <div className="app">My First TypeScript Component</div> */}
    {/* lessons */}

    <Lesson_06 />
    {/* <Sandwich /> */}
    </>
  )
}

export default App
