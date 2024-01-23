import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
    <div>RouteLayout</div>
    <Outlet/>
    </>
    
  )
}

export default RouteLayout