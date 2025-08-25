import {type ReactNode} from "react";
import { v4 } from "uuid";
import "./styles.css";
import {type Car} from "./types";

function Homework_06() {
 
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

//   const carConst
 return (
    <div className="homework_06_page_wrapper">
      {cars.map((car:Car, index: number) => (
        <div className="card" key={index}>
          <p className="card-info">Brand: {car.brand}</p>
          <p className="card-info">Price: {car.price}</p>
          <p className="card-info">Diesel: {car.isDiesel ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework_06;

// протипизировать следующий массив обьектов:

// const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, { brand: "Audi", price: 50000, isDiesel: true } ];

// Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице. Стили на ваше усмотрение
