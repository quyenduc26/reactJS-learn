import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//  WOKR WITH ARRAY
// let myArr: Array<number> = [1,2,3,4,5]
// myArr.push(6)

// myArr.map(item => item+1)

// let newArr = myArr.splice(2,1);

// myArr.filter( item => item > 1)


// EXERCISE 1
// function  transformToObject( listOfNumber: Array<number>){
//   let result = [];
//   for( let number of listOfNumber){
//     result.push( {value : number});
//   }
//   return result;
// }



//EXERCISE 2
// let studentList = [
//   { firstName: 'John', lastName: 'Doe', age: 20 },
//   { firstName: 'Alice', lastName: 'Smith', age: 22 },
//   { firstName: 'Bob', lastName: 'Johnson', age: 21 }
// ];

//  function updateStudentAge( firstName: string, lastName: string, newAge: number){
//   let student = studentList.find( student => student.firstName == firstName && student.lastName == lastName );
//   if(student){ student.age = newAge}
//   else{ return 'Not found student'}
//   return student;
//  }




// EXERCISE 3
  // type product = {
  //   id: number, 
  //   name: string, 
  //   price: number
  // }

  // type cartItem = {
  //   id: number, 
  //   quantity: number
  // }

  // let products: Array<product> = [
  //   { id: 1, name: "Apple", price: 2.5 },
  //   { id: 2, name: "Banana", price: 1.5 },
  //   { id: 3, name: "Orange", price: 3 },
  //   { id: 4, name: "Rice", price: 1.5 },
  //   { id: 5, name: "Chocolate", price: 3 },
  // ];

  // let shopping_cart: Array<cartItem> = [
  //   { id: 1, quantity: 2 },
  //   { id: 3, quantity: 1 },
  // ];


  // function getCardTotalAmount( products: Array<product>, shoppingCart: Array<cartItem>){
  //   let amount = shoppingCart.reduce( ( total, cur) => {
  //     let product = products.find( item => item.id == cur.id);
  //     if(product){
  //       return total + product.price * cur.quantity;
  //     }
  //     return total;
  //   },0)
  // }
 
//   function removeCartTotalAmount(id: number): Array<cartItem> {
//     let product = shopping_cart.find(item => item.id === id);
//     if (product) {
//       if(product.quantity > 1)
//         product.quantity--;
//       else{
//         shopping_cart.splice(shopping_cart.indexOf(product),1)
//       }
//       return shopping_cart;
//     } else {
//       return shopping_cart;
//     }
// }

// console.log(removeCartTotalAmount(1))
  



  return (
    <></>
  )
}

export default App
