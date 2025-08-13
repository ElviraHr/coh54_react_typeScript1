import { useState, type JSX } from "react";
import style from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>(" Бутербродный конфигуратор : "
  );
  function handleAddCheese(): void {
    setSandwich(`${sandwich} СЫР 🧀`);
  }
  function handleAddTomato(): void {
    setSandwich(`${sandwich} ПОМИДОР 🍅`);
  }
  function handleAddBread(): void {
    setSandwich(`${sandwich} ХЛЕБ 🍞`);
  }
  function handleAddBacon(): void {
    setSandwich(`${sandwich} БЕКОН 🥓`);
  }
  function handleReset(): void {
    setSandwich(" Бутербродный конфигуратор : ");
  }

  return (
    <div>
      <h1>Sandwich</h1>
      <img
        src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/05/hungry-story-of-the-sandwich-iStock_000016810360Large.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={`${style.container} ${style.font}`}>
        <button className={style.btn} type="button" onClick={handleAddCheese}> Добавить СЫР </button>
        <button className={style.btn} type="button" onClick={handleAddTomato}> Добавить ПОМИДОР </button>
        <button className={style.btn} type="button" onClick={handleAddBread}> Добавить ХЛЕБ </button>
        <button className={style.btn} type="button" onClick={handleAddBacon}> Добавить БЕКОН </button>
        <button className={style.btn} type="button" onClick={handleReset}> Очистить</button>
      </div>
    </div>
  );
}
