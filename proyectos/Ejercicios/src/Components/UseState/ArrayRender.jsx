import React from 'react'
const miArray = ["Ambrosio", "Pablo", "Antonio", "Javier"];

function ArrayRender() {
    
  return (
    miArray.map((nombre, index) => (
        <li key={index}>{nombre}</li>
    ))
  )
}

export default ArrayRender