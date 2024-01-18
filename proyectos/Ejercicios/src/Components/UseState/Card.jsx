import React from 'react'

const Card = (props) => {

    const {title , body , pie } = props


  return (
    <div style={{border: "1px solid black"}}>
        
        <h1>{title}</h1>
        <h2>{body}</h2>
        <h3>{pie}</h3>
    </div>
  )
}

export default Card