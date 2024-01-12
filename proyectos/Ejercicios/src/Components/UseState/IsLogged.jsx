const isLoggedIn = false;

import React from 'react'

function IsLogged() {
  return (
    isLoggedIn ? <p>Bienvenido</p> : <p>Por favor, inicia sesión</p>
  )
}

export default IsLogged