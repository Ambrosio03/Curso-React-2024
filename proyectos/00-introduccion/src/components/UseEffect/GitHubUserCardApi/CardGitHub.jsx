import React, { useEffect, useState } from 'react'

const CardGitHub = (props) => {
    
    const {avatar_url, login, html_url , openModal} = props;


    function handlerClickImg (){
      openModal(avatar_url);
    }
  return (
    <div className='relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5 '>
        <div className='realtive mx-4 mt-6 h-40 overflow-visible rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg'>
        <img src={avatar_url} alt='' className='w-32 h-32 rounded-full mb-4 mx-auto cursor-pointer my-4' onClick={handlerClickImg}></img>
        </div>
        <div className='p-6'>
        <p className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-900 antialiased'>{login}</p>
        <p className='block font-mono text-base font-light leading-relaxed text-inherit antialiased'>{html_url}</p>
        </div>
        <div className='p-6 pt-0'>
          <button className='select-none rounded-lg bg-blue-500 py-3 px-3 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-800/20 transition-all hover:shadow-lg hover:shadow-blue-800/50'>ir al github</button>
        </div>
    </div>
    
  )
}

export default CardGitHub