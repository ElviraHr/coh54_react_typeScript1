import "./styles.css"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Counter from "../../components/Counter/Counter";
import { WEATHER_CODES } from "./types";
import {useState} from "react";

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import "./styles.css";
// import {WEATHER_CODES} from "../../homeworks/Homeworks_06/types";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Lesson_07() {

  // 12. enum
  // Создайте функцию, которая бы принимала бы следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:

const decode = (weatherCode:WEATHER_CODES) => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };
  
  const weather = decode(WEATHER_CODES.DS);
  console.log(weather);

//13. Generic
type ArrayGenerator<ValueType> = ValueType[];
const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
const someNumberArray: ArrayGenerator<number> = [1, 2, 3, 4, 5];
const someBooleanArray: ArrayGenerator<boolean> = [true, false, true];

//Generic with objects
interface AppleType {
  model: string;
  articul: number;
}

interface ShopItems<ValueType> {
  type: string;
  value: ValueType;
}
const item1: ShopItems<number> = {
  type: "TV",
  value: 1234567890,
} 

const item2: ShopItems<string> = {
  type: "PC",
  value: "Xiaomi Model 123",
} 

const item3: ShopItems<AppleType> = {
  type: "PC",
  value: {
    model: "Apple Pro Book",
    articul: 12455587866,
  },
} 
//компонент Count с логикой в родительском компоненте
//синтаксис с реструктуризацией
const[count, setCount] = useState<number>(0);
console.log(count);
console.log(setCount);

const onMinus = () => {
    setCount((prevValue):number => {
        return prevValue - 1;
    });
  };

  const onPlus = () => {
    setCount((prevValue): number => {
        return prevValue + 1;
    });
  };

const sendDataToServer = () =>{
  console.log(`Sending ${count} to server`);

};

  return <div className="homework07-wrapper">
      <Button name = "Send" onClick={sendDataToServer} />
      <Input id = "test-id" name="test" label = "test_label" placeholder="test placeholder" />
      <Counter onMinus={onMinus} onPlus={onPlus} count={count} />

  </div>;
}


export default Lesson_07;