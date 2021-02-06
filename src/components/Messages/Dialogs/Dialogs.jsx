import React from 'react';
import stl from './Dialogs.module.scss';
import UserDialogLink from './UserDialogLink/UserDialogLink';

export default function Dialogs(props) {
  return (
    <div className={stl.d}>
      <UserDialogLink userName='Liza' id='1' />
      <UserDialogLink userName='Dima' id='2' />
      <UserDialogLink userName='Valek' id='3' />
    </div>
  )
}
