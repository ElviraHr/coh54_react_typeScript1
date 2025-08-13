import "./styles.css";

function Lesson_06() {
  //types 8: udefind, string, number, bigint, boolean, symbol, 
  
    //1. type: string
  let userFullName: string = "John Jonson";
  //userFullName = 30; //error!

  let hello = `Hallo, ${userFullName}`; //если тип не указан явно, тип назначается автоматически в зависимости от того какой тип данных первым был записан в переменную.
  //hello = 30; //Error
///////////////////////////////////////////////////////////////////////////////

//2 type: number

let number1: number = 100;
let number2: number = 39.5;
///////////////////////////////////////////////////////////////////////////////

// 3 type: boolean
 let isAdmin: boolean = true;
 isAdmin = false;
///////////////////////////////////////////////////////////////////////////////
//4. array
const animals: string[] = ["Tiger", "Lion", "Dog"];
animals.push("Cat");
//animals.push(100); //error
const numbers: number[] = [1, 2, 3, 4, 5, 6];
///////////////////////////////////////////////////////////////////////////////
//5. tupel
const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
] = ["name", "John", "age", 30, "name", "Pavel",  "age", 40]; //userArray.unshift - добавляет элемент в начало массива, puch - в конец
///////////////////////////
//6. functions
//6.1 используем 1 способ типизации функций:
 const sayHi = (personName: string): void => {
     console.log(`Hello ${personName}`);
 }
// 2 способ типизации функции:
// const sayHi : (personName: string) => void = (personName) => {
//      console.log(`Hello ${personName}`);
// }
//6.2 Функция, возвращающая результат:
const add = (a: number, b: number): number => {
    return a + b;
}
//add(2, "qwe");//error
/////////////////////////////////////////////////////////////////////////////////////
//7. any
 let anyVariable: any = "hello";
 anyVariable = 300;
 anyVariable = true;
 /////////////////////////////////////
 //8. null & undefined
 let userName: null | string;
userName = "qwe";

let userAge: undefined | number = undefined;

userAge = 30;
//////////////////////////////////////////////////////////
//9. objects
interface Admin {
    isAdmin: boolean;
}
interface User extends Admin {
 firstName: string;
    lastName: string;
    age: number;
    job: string;
    isAdmin: boolean;
    pet?: string; //ключ не обязательный
}
interface User {
    isFamily: boolean;
}
const user1: User = {
    firstName: "John",
    lastName: "Jonson",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
    isFamily: true,
 };
///////////////////////////////////////////
//10 - type
type GlobalAnimalProps = {
    isAnimal: boolean;
}
type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
};

const animal1: Animal | GlobalAnimalProps = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
}

////
type userDataFromServerType = User | null | undefined;
let userDataFromServer: userDataFromServerType = null;
userDataFromServer = undefined;


  return (
    <div className="lesson_06_page_wrapper">
      Lesson 06
      {userFullName}
    </div>
  );
}
export default Lesson_06;
