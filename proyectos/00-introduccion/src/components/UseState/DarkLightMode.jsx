import React, { useState } from 'react'

const DarkLightMode = () => {

    const [darkMode, setDarMode] = useState(false)
  return (
    <>
        <div className={`default ${darkMode ? "dark" : "light"}`}>
            <h1>Cambio de color</h1>
            <button onClick={toggleTheme}>{darkMode ? "Modo Claro" : "Modo Oscuro"}</button>
        </div>
    </>
  )
}

export default DarkLightMode