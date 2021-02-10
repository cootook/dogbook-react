import React from 'react';
import { NavLink } from 'react-router-dom';
import stl from './UserDialogLink.module.scss';
import imgLogo from '../../../__images/userLogo/1.png'

export default function UserDialogLink(props) {
  const path = `/Messages/${props.id}`;
  return (

    <NavLink to={path} className={stl.u}>
      <div className={stl.logo}>
        <img src={imgLogo} alt={`${props.userName}`} />
      </div>
      <div className={stl.userName}>
        {props.userName}
      </div>
    </NavLink>

  )
}
