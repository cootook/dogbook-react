import React from 'react';
import { NavLink } from 'react-router-dom';
import stl from './SideBarFriends.module.scss';
import logoPath from '../../__images/userLogo/3.png';

export default function SideBarFriends(props) {
  const bestFriendsIdArr = props.bestFriends;
  const users = props.users;
  const BestFriends = (props1) => {
    return props1.idArr.map(friendId => {
      // get friend`s name!
      return (
        <NavLink to={`/${friendId}`} className={stl.friend}>
          <div className={stl.logo}>
            <img src={logoPath} alt="friend" />
          </div>
          <div className={stl.name}>
            {props}
          </div>
        </NavLink>
      )
    })
  }
  return (
    <div className={stl.bestFriends}>
      <BestFriends idArr={bestFriendsIdArr} users={users} />
    </div>
  )
}
