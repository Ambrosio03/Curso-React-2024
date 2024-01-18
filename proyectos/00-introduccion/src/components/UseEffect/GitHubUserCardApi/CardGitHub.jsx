import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const CardGitHub = (props) => {
    
    const {avatar_url, login, html_url} = props;

      

        
        
    

  return (
    <div className='bg-gray-200 p-4 rounded-lg shadow-md sm:min-w-[200px]'>
        <img src={avatar_url} alt='' className='w-16 h-16 rounded-full mb-4 mx-auto cursor-pointer'></img>
        <p className='text-xl font-bold'>{login}</p>
        <p className='text-2xl text-blue-500'>{html_url}</p>
    </div>
  )
}

export default CardGitHub