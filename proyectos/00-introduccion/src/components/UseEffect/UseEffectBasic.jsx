import React, { useEffect, useState } from 'react'

export const UseEffectBasic = () => {
  const [counter, setCounter] = useState(0);
  
  
  function handlerClick() {
    setCounter(counter +1)
  } 
  
  
  
  //variantes del useEfect
  // useEffect(() => {
  //   // primera variante sin dependencias
  //   //se ejecuta cuando se pinta el componente 
  //   // y cuando se modifica cualquier estado.
  //   // esta variante es MUY  peligrosa

  //   console.log("Estoy en UseEffect");

  // }) 
  
  // useEffect(() => {
  //   // solo se ejecuta una unica vez cunado se monta 
  //   //el componente poque el array de dependencias esta vacio
  //   console.log("Estoy en UseEffect v2");
  //  },[])
  
  useEffect(() => {
    //en el array de dependencias coloco aquel esta do k quiero k cuando se modifique dispare este UseEffect
    //Se ejecuta cuando se monta el componente y cuando se modifica el estado
    console.log("Estoy en el UseEffect v3"); 
  },[counter])
  
   
  return (
    <div className='flex justify-center items-center bg-cyan-200 h-screen'>
      <h1 className='text-x1 font-bold'>Contador: {counter}</h1>
      <button className='mt-4 p-2 bg-slate-800 text-white rounded-md'
      onClick={handlerClick}>Aumentar</button>
    </div>
  )
}
