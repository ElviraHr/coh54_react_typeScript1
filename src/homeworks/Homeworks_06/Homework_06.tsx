import "./styles.css";

function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
 return (
    <div>
      {cars.map((car, index) => (
        <div className="card" key={index}>
          <p>Brand: {car.brand}</p>
          <p>Price: {car.price}</p>
          <p>Diesel: {car.isDiesel ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework_06;

// протипизировать следующий массив обьектов:

// const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, { brand: "Audi", price: 50000, isDiesel: true } ];

// Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице. Стили на ваше усмотрение
