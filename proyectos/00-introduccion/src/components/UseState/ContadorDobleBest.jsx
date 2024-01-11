import React, { useState } from 'react'
const initialState = {
    ambrosio : 0,
    ana : 0,
};

const ContadorDobleBest = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrement(friendName) {
        setFriends({ ...friends,[friendName]: friends[friendName]+1});
    }
  return (
    <>
    <div>
        <span> Ambrosio tiene : {friends.ambrosio}</span>
        <button onClick={() => handleIncrement("ambrosio")}>Aumentamos +1 amigo</button>
    </div>

    <div>
        <span> Ana tiene : {friends.ana}</span>
        <button onClick={() => handleIncrement("ana")}>Aumentamos +1 amigo</button>
    </div>
    </>
  )
}

export default ContadorDobleBest