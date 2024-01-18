import React, { useState } from 'react'

const ToggleVisibility = () => {


    const [visible, setVisible] = useState(true);

    function handlerButton() {
        setVisible(!visible)
    }


  return (
    <>
    <div>
        {visible ? <p>Esto esta visible</p> : ""}
        <button onClick={handlerButton}>{visible ? "Ocualtar texto" : "Mostrar texto"}</button>
    </div>
    </>
    
  )
}

export default ToggleVisibility