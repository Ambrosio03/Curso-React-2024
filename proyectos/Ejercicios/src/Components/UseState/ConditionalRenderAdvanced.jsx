import React, { useState } from 'react'

export const ConditionalRenderAdvanced = (props) => {

    const {isLoggedIn, userRole}=  props

    function logged() {
        if (isLoggedIn && userRole === "admin") {
            return(
            <>
            <p>Bienvenido usuario</p>
            <p>Privilegios de adiministrador</p>
            </>)
        }else if(isLoggedIn){
            return(<p>Bienvenido usuario</p>)
        }else{
            return(<p>Identificate</p>)
        }
    }


  return (
    
   logged()



  )
}
