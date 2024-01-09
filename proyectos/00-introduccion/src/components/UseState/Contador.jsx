import React, { useState } from 'react'

const initialState=0;
const Contador = () => {

const [counter, setCounter] = useState(initialState);


function handleIncrement() {
    setCounter(counter+1);
}
function handlerDecrement(value) {
    setCounter(counter-value);
}


  return (
  <>
    <h1>Ejemplo de contador en React</h1>
    <h2>El contador vale {counter}</h2>
    <button onClick={handleIncrement}>Incrementar contador</button>
    <button onClick={()=>handlerDecrement(5)}>Decrementar el contador</button>
  </>
    
  
    )
}

export default Contador