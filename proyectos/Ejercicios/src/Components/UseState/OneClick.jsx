import React from 'react'

function OneClick() {

    function handlerOnClick(){
            console.log("Has presionado el boton");
    }
  return (
    <button 
   onClick={handlerOnClick}>Mandar mensaje por consola</button>
  )
}

export default OneClick