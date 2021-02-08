import React from 'react';
import stl from './Dialogs.module.scss';
import UserDialogLink from './UserDialogLink/UserDialogLink';

export default function Dialogs(props) {
  const dialogsFromArr = (arr) => {
    return arr.map((d, i) => {
      return <UserDialogLink key={i * arr.length} userName={d.name} id={d.id} />
    })
  }

  return (
    <div className={stl.d}>
      {dialogsFromArr(props.users)}
    </div>
  )
}
