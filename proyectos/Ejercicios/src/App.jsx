//import { useState } from 'react'

import './App.css'
import ArrayRender from './Components/UseState/ArrayRender'
import OneClick from './Components/UseState/OneClick'
//import IsLogged from './Components/UseState/IsLogged'

function App() {

  return (
    <>
    {/* Estan todos hechos en componentes aparte  */}
      <h1>Actividades Relacion de Ejercicios React</h1>
      <ArrayRender></ArrayRender>
      <OneClick></OneClick>
    </>
    
  )
}

export default App
