import React, {} from 'react'

const CardPokemon = (props) => {
    
    const {id, name, img ,html_url} = props;



    // function handlerClickImg (){
    //   openModal(avatar_url);
    // }
  return (
    <div className='relative flex w-90 h-90 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5 border-black'>
        <img src={img} alt='' className='w-28 h-28 mb-4 mx-auto cursor-pointer my-4 '></img>
        <p>{id}</p>
        <div className='p-6'>
        <p className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-900 antialiased'>{name}</p>
        <p className='block font-mono text-base font-light leading-relaxed text-inherit antialiased'>{html_url}</p>
        </div>
        <div className='p-6 pt-0'>
          <button className='select-none rounded-lg bg-blue-500 py-3 px-3 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md
           shadow-blue-800/20 transition-all hover:shadow-lg hover:shadow-blue-800/50'>Informacion</button>
        </div>
    </div>
    
  )
}

export default CardPokemon