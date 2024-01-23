import React from 'react'
import { Link } from 'react-router-dom'

const HomePaga = () => {
  return (
   <>
    <div>Estoy en home page</div>
    <Link to="/productos">Volver a productos</Link>
   </>
  )
}

export default HomePaga