import React, { Fragment, useState } from 'react'

export const UserList = ({array}) => {

    const [listas, setListas] = useState(array);

    

  return (
    <div>
        <ul>
          {listas.map((lista , index) => <><ol><a href="">{index}</a>{lista}</ol></> )}</ul>
    </div>
  )
}
