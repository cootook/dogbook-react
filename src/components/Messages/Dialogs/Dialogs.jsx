import React from 'react';
import stl from './Dialogs.module.scss';
import UserDialogLink from './UserDialogLink/UserDialogLink';

export default function Dialogs(props) {
  return (
    <div className={stl.d}>
      <UserDialogLink userName='Liza' />
      <UserDialogLink userName='Dima' />
      <UserDialogLink userName='Valek' />
    </div>
  )
}
