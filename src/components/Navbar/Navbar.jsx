import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import stl from './Navbar.module.scss';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import SideBarFriends from './SideBarFriends/SideBarFriends';

export default function Navbar(props) {
  const navbarLinksTitles = props.state.navBar.items;
  // const friendsSidebarId = props.state.navBar.bestFriends;
  console.log(props.state.navBar)
  return (
    <nav className={stl.container}>
      <div className={`${stl.profile_logo__container}`}>
        <Link to='Profile' className={`${stl.item__link} ${stl.profile_logo}`}></Link>
      </div>
      <NavbarLinks linkTitles={navbarLinksTitles} />
      <div className={stl.bestFriends}>
        {SideBarFriends(props.state.navBar.bestFriends, props.state.users)}
      </div>
    </nav>
  )
}
