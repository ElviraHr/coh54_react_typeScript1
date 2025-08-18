import Feedback from "components/Feedback/Feedback";
import { useState } from "react";

function Homework_07() {
  const [like, setLike] = useState(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
   };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };
  return (
    <div>
      <Feedback like={like} dislike={dislike} onLike={onLike} onDislike={onDislike} resetResults={resetResults}  />
    </div>
  );
}
export default Homework_07;
