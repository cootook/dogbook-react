import React from 'react';
import { NavLink } from 'react-router-dom';
import stl from './SideBarFriends.module.scss';
import logoPath from '../../__images/userLogo/3.png';

export default function SideBarFriends(bestFriendsArr, users) {

  const bestFriends = bestFriendsArr.map(friendId => {
    return (
      <NavLink to={`/${friendId}`} className={stl.bestFriend}>
        <div className={stl.logo}>
          <img src={logoPath} alt="friend" />
        </div>
        <div className={stl.name}>
          {friendId}
        </div>
      </NavLink>
    )
  })

  return bestFriends;
}
