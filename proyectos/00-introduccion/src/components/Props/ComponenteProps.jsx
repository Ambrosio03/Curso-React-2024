import React, { useState } from 'react'


const Titulo = (props) => {
    return (
        <h2 className='text-x12 font-bold'>{props.children}</h2>
    )
}

const Card = (props) => {
//Componente hijo
const  {title , descripcion , bgColor , setCount} = props;   

    return(
       
        <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
            <h2 className='text-x1 font-bold'>{title}</h2>
            <p className='mt-2'>{descripcion}</p>
            <p className='mt-2'>{props.children}</p>
            
        </div>
        
    )
}

const ComponenteProps = () => {

    const [count, setCount] = useState(0);
    //Este es el compoennte padre
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400 gap-4'>
        <h1 className='text-xl font-bold'>El count vale: {count}</h1>
        <Card title="Tarjeta 1"   descripcion = "Contenido de la tarjeta 1" bgColor="bg-green-200" setCount={setCount}>
            <Titulo>Soy el titulo</Titulo>
        </Card>
        <Card title="Tarjeta 2"   descripcion = "Contenido de la tarjeta 2" bgColor="bg-green-200"/>
        <Card title="Tarjeta 3"   descripcion = "Contenido de la tarjeta 3" bgColor="bg-green-200"/>
    </div>
    
    )
}

export default ComponenteProps