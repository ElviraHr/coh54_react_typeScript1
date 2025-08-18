import type { JSX } from "react";
import "./App.css";
// lessons
// import Lesson_06 from './lessons/Lesson06/Lesson_06'
// import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
//homeworks
// import Homework_06 from './homeworks/Homeworks_06/Homework_06'
import Homework_07 from "homeworks/Homework_07/Homework_07";

// consultations
// import Sandwich from './Sandwich/Sandwich'

function App(): JSX.Element {
  return (
    <>
      {/* <div className="app">My First TypeScript Component</div> */}

      {/* lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}

      {/* homeworks */}
      {/* <Homework_06 /> */}
      <Homework_07 />
      {/* consultations */}
      {/* <Sandwich /> */}
    </>
  );
}

export default App;
