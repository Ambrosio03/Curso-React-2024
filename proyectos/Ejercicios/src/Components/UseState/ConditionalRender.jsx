import React from 'react'

const ConditionalRender = ({condition}) => {


  return (
    condition ? <p>Condicion verdadera</p> : <p>Condicion falsa</p>
  )
}

export default ConditionalRender