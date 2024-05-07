// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // EXERCISE 1

  // type product = {
  //   name: string,
  //   price: number,
  //   quantity: number
  // }

  // let shoppingCart : Array< product> = [
  //   { name: "Apples", price: 2.5, quantity: 3 },
  //   { name: "Bananas", price: 1.5, quantity: 2 },
  //   { name: "Oranges", price: 3, quantity: 1 },
  // ];

  // function calculateTotalPrice( cart: Array< product>){
  //   let totalPrice = cart.reduce( (total, cur) => total + cur.price * cur.quantity ,0)
  //   return totalPrice;
  // }

  // console.log(calculateTotalPrice(shoppingCart))

  //EXERCISE 2
  // let originalArray: Array<number> = [1, 2, 3, 4, 5];

  // function updateArray(array : Array<number> , index: number, newValue: number) {
  //   let newArray = [...array];
  //   newArray[index] = newValue;
  //   return newArray;

  // }

  // let updatedArray = updateArray(originalArray, 2, 10);

  // console.log("Original array:", originalArray);
  // console.log("Updated array:", updatedArray);

  // EXERCISE 3

  // function findAverage(numbers: Array<number>) {
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //       sum += numbers[i];
  //   }
  //   return sum / numbers.length;
  // }
  // console.log(findAverage([1, 23, 4, 3, 6]));

  // EXERCISE 4

  // let numbers = [1,2,5,7,3,6]
  // function filterEvenNumbers( arr:Array<number> ){
  //   return arr.filter( number => number % 2 == 0);
  // }
  // function squareNumbers( arr:Array<number> ){
  //   return arr.map( number => number*number);
  // }
  // function sumArray( arr:Array<number> ){
  //   return arr.reduce( (total, cur) => total + cur, 0);
  // }

  // console.log(filterEvenNumbers(numbers));
  // console.log(squareNumbers(numbers));
  // console.log(sumArray(numbers));

  // EXERCISE 5

  type student = {
    id: number;
    name: string;
    grade: string;
  };

  const students: Array<student> = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];

  function updateStudentGrade(
    studentsArray: Array<student>,
    idToUpdate: number,
    newGrade: string
  ) {
    const studentIndex = studentsArray.findIndex(
      (student) => student.id == idToUpdate
    );
    if (studentIndex !== -1) {
      const updatedStudent = {
        ...studentsArray[studentIndex],
        grade: newGrade,
      };
      studentsArray[studentIndex] = updatedStudent;
    } else {
      return "Student not found";
    }
    return studentsArray;
  }
  console.log(updateStudentGrade(students, 3, "A+"));

  return <></>;
}

export default App;
