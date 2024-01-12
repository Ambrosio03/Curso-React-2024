import React from 'react'



function ArrayRender() {
    const miArray = ["Ambrosio", "Pablo", "Antonio", "Javier"];
  return (
    miArray.map((nombre, index) => (
        <li key={index}>{nombre}</li>
    ))
  )
}

export default ArrayRender