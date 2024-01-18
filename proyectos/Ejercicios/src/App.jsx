//import { useState } from 'react'

import './App.css'
import ArrayRender from './Components/UseState/ArrayRender'
import Card from './Components/UseState/Card'
import ConditionalRender from './Components/UseState/ConditionalRender'
import { ConditionalRenderAdvanced } from './Components/UseState/ConditionalRenderAdvanced'
import CustomButton from './Components/UseState/CustomButton'
import Header from './Components/UseState/Header'
import OneClick from './Components/UseState/OneClick'
import ToggleVisibility from './Components/UseState/ToggleVisibility'
import { UserList } from './Components/UseState/UserList'
//import IsLogged from './Components/UseState/IsLogged'


function App() {

  return (
    <>
    {/* Estan todos hechos en componentes aparte  */}
       <Header title={"Actividades Relacion de Ejercicios React"}></Header>
      <ArrayRender></ArrayRender>
      <OneClick></OneClick>

      <div style={{ backgroundColor: 'red', fontSize: "16px" }}>
        <h3>Esto tiene stilo</h3>
      </div>
      <CustomButton color = {"red"} text ={"Hola mundo"}></CustomButton>
      <ConditionalRender></ConditionalRender>
      <Card title= {"hola"} body = {"Hola mundo"} pie={"soy el pie"}></Card>
      <ToggleVisibility></ToggleVisibility>
      <UserList array = {["ambrosio", "pepe", "jose"]}></UserList>
      <ConditionalRenderAdvanced isLoggedIn ={true} userRole={"admin"}></ConditionalRenderAdvanced>
    </>
    
  )
}

export default App
