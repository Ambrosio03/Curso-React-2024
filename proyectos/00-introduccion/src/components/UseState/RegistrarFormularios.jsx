import React, { useState } from 'react'

// global variables
const initialState = {
    name: "",
    email: "",
    password:"",
}

function RegistrarFormularios() {

//Declaracion de estados
const [formData, setFormData] = useState(initialState);


function handlerSubmit(e) {
    e.preventDefault();
    console.log("Las credenciales son: ",formData);
    setFormData(initialState);
}


function handlerChange(e) {
    e.preventDefault();
    const {name , value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}


  return (
   <form onSubmit={handlerSubmit}>
    <div className="max-w-md mx-auto mt-8 p6  shadow-md rounded-md">
        <label className='mx-4 text-2x1 mb-4'>
            Nombre:
                <input className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" name='name' value={formData.name} 
                onChange={handlerChange}/>       
                 </label>
    </div>
    <div className="max-w-md mx-auto mt-8 p6  shadow-md rounded-md">
        <label  className='mx-4 text-2x1 mb-4'>
            Email:
                <input className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" type="email" name='email' value={formData.email}
                onChange={handlerChange}/>
        </label>
    </div>
    <div className="max-w-md mx-auto mt-8 p-6 shadow-md rounded-md">
        <label  className='mx-4 text-2x1 mb-4'>
            Password:
                <input className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" name='password' value={formData.password}
                onChange={handlerChange}/>
        </label>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"type='submit'>Registrar Usuario</button>
   </form>
  )
}

export default RegistrarFormularios