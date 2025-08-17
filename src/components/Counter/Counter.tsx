// 1. Импортировать фурнкцию хук(вспомогательные функции реакта, пер.якорь) useState() из библиотеки React
//позволяет управлять состоянием компонентов и перерендеривать их
//в аргументах функции массив из двух элементов что меняем и какой фукцией мы это меняем

import { type CounterProps } from "./types";
import Button from "../Button/Button";
import "./styles.css";
function Counter({onMinus, onPlus, count}: CounterProps) {
//при старом способе компонент не обновляется. Все время 0
//связано с виртуальным домом, который не перерисовывает ничего
//   let count = 0;
  
//   const onMinus = () => {
//     count = count - 1;
//   };
  
//   const onPlus = () => {
//     count = count + 1;

//   };
//синтаксис без реструктуризации:
// const state = useState();
// console.log(state);
// console.log(state[0]);
// console.log(state[1]);


  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus}/>
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus}/>
      </div>
    </div>
  );
}
export default Counter;
