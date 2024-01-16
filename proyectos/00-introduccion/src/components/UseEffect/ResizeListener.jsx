import React, { useEffect, useState } from 'react'

const initialState = {
    width : window.innerWidth,
    height: window.innerHeight,
};



export const ResizeListener = () => {
    const [windowSice, setWindowSice] = useState(initialState);

    useEffect(() => {
        
        function handlerResize(){
            setWindowSice({
                width : window.innerWidth,
                height: window.innerHeight,
            });
        }
        
        
        window.addEventListener("resize" , handlerResize)
        
        return () => {
            window.removeEventListener("resize", handlerResize);
        }
    },[])
    
  return (
    <div className='flex justify-center items-center bg-cyan-200 h-screen'>
        <p>
            El tamaño de mi ventana es: {windowSice.width}x{windowSice.height};
        </p>
    </div>
  )
}
