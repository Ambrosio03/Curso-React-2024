import {  } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import HomePaga from './components/router-dom/HomePaga';
import Products from './components/router-dom/Products';
import RouteLayout from './components/router-dom/RouteLayout';

function App() {
  
  const router  = createBrowserRouter([
    {path:'/', element:<RouteLayout/>, children:[
      {path:'/productos', element:<Products/>},
      {path:'/', element:<HomePaga/>}
    ],
  },
    
  ]);

  return <RouterProvider router={router}/>
    
}

export default App
