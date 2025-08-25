import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(0);

  function handleAdDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }

  function handleAdBird(): void {
    setNumberOfBirds(numberOfBirds + 1);
  }
// пример 1 - пустой массив зависимостей 
  useEffect( () => {
    console.log('UseEffect 1 - === mounting')
  }, [])

  //пример 2 - бе массива зависимостей (вообще), отрабатывает при любых изменениях внутри компонента

    useEffect( () => {
    console.log('UseEffect 2 - === mounting && update')
  })

  //пример 3 - с указанием зависимостей

    useEffect( () => {
    console.log('UseEffect 3 - === mounting && some update numberOfDogs')
  }, [numberOfDogs])

  return (
    <div>
      <h1>Playground</h1>
      <p>Number of Birds : {numberOfBirds}</p>
      <p>Number of Dogs : {numberOfDogs}</p>
      <button type="button" onClick={handleAdDog}> Let the dog in   </button>
         <button type="button" onClick={handleAdBird}> New Bird   </button>
    </div>
  );
}

// Component lifcycle - жизненный цикл компонента
// Этапы жизненого цикла:
// Mount - первая отрисовка компонента на странице
// Update - изменение
// Unmount - когда перестает отрисовываться
