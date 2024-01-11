import React, { useState } from 'react'
import "./DarkLight.css";

const DarkLightMode = () => {

    const [darkMode, setDarMode] = useState(false)
    function toggleTheme() {
      setDarMode(!darkMode);
    }
  return (
    <>
        <div className={`default ${darkMode ? "dark" : "light"}`}>
            <h1>Cambio de color</h1>
            <button onClick={toggleTheme}>{darkMode ? "Modo Claro" : "Modo Oscuro"}</button>
            <p>Hola Ambrosio</p>
        </div>
    </>
  )
}

export default DarkLightMode