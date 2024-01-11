
//imports
import "./App.css";
import React from 'react'
import Contador from "./components/UseState/Contador";
import ContadorDoble from "./components/UseState/ContadorDoble";
import ContadorDobleBest from "./components/UseState/ContadorDobleBest";
import DarkLightMode from "./components/UseState/DarkLightMode";


//declaracion de varibles globales 
const App = () => {

  return (
    <>
    <ContadorDobleBest></ContadorDobleBest>

    </>
  )






  //const texto = "Hola";
  // const numero = 1;
  // const array = ["pera","manzana","uva","fresa","platano"];
  // const objeto = {
  //   nombre: "Ambrosio",
  //   edad: "19",
  // };
  // return (
  //   <div>
  //     <h1>Ejemplo basico JSX</h1>
  //     <h2>Variables en jsx y objetos</h2>
  //     <div>
  //       <h3>La varibale texto vale {texto}</h3>
  //       <h3>La variable numero vale {numero}</h3>
  //       <h3>La variable array vale 
  //         {array.map((fruta,index) =>(
  //           <li key={index}>{fruta}</li>
  //         ))}</h3>
  //       <h3>Me llamo {objeto.nombre} y tengo {objeto.edad} años</h3>
  //     </div>
  //   </div>
  // )
}

export default App