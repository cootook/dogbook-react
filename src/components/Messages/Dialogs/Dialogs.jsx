import React from 'react';
import stl from './Dialogs.module.scss';
import UserDialogLink from './UserDialogLink/UserDialogLink';

export default function Dialogs(props) {
  const dialogsArr = [
    { name: 'Liza', id: 1 },
    { name: 'Dima', id: 2 },
    { name: 'Valek', id: 3 },
    { name: 'Friend', id: 4 },
  ];

  const dialogsFromArr = (arr) => {
    return arr.map(d => {
      return <UserDialogLink userName={d.name} id={d.id} />
    })
  }

  return (
    <div className={stl.d}>
      {dialogsFromArr(dialogsArr)}
    </div>
  )
}
