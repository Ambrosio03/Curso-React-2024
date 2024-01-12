//import { useState } from 'react'

import './App.css'
import ArrayRender from './Components/UseState/ArrayRender'
import Header from './Components/UseState/Header'
import OneClick from './Components/UseState/OneClick'
//import IsLogged from './Components/UseState/IsLogged'

function App() {

  return (
    <>
    {/* Estan todos hechos en componentes aparte  */}
      <Header title={"Actividades Relacion de Ejercicios React"}></Header>
      <ArrayRender></ArrayRender>
      <OneClick></OneClick>
      
    </>
    
  )
}

export default App
