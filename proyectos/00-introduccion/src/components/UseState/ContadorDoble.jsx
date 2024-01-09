import React, { useState } from 'react'
const initialState={
    ambrosio:0,
    ana:0,
};
const ContadorDoble = () => {
    const [friends, setFriends] = useState(initialState)

    function handlerIncrementAmbrosio(){
        setFriends({...friends,ambrosio: friends.ambrosio+1});
    }
  return (
    <>
        <div>
            <span>Ambrosio tiene : <strong>{friends.ambrosio}</strong>  </span>
            <button onClick={handlerIncrementAmbrosio}>Aumentamos +1 amigos</button>
        </div>
    </>
  )
}

export default ContadorDoble