import React from 'react'


const CustomButton = (props) => {

   
    const {color, text ,onClick} = props;


  return (
    <div style={{backgroundColor : color}} onClick={onClick}><p>{text}</p></div>
  )
}

export default CustomButton