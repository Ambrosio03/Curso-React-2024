import React from 'react'


 const Modal = ({isopen, imgUrl, closeModal}) => {

  return (
    
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center
      ${isopen ? " opacity-180 visible" :"opacity-0 invisible"} transition-opacity ease-in-out duration-500 `}>
      <div className=' fixed top-0 left-0 w-full h-full bg-black opacity-90 flex items-center justify-center'></div>
          <div className='z-10 bg-white p-4 rounded-lg max-w-2xl'>
            <img src={imgUrl} alt="Avatar usuario"  className='w-full rounded '/>
            <button className='mt-4 p-2 bg-red-500 text-white rounded' onClick={closeModal}>X</button>
          </div>
      </div>
    
    
  )
}

export default Modal