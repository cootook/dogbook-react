import React from 'react';
import stl from './Header.module.scss';
import HeaderLink from './HeaderLink/HeaderLink';
import imgBurger from '../__icons/Burger.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={stl.header}>

      <div className={stl.logo}>
        <NavLink to='/'>
          <div className={stl.logo_title}>Dogbook</div>
          <div className={stl.logo_subtitle}>find your dog</div>
        </NavLink>
      </div>

      <div className={stl.nav_menu}>
        <div className={stl.nav_menu_ul}>
          <HeaderLink linkTitle='Join' isActive='true' />
          <HeaderLink linkTitle='Find' isActive='false' />
          <HeaderLink linkTitle='Help' isActive='false' />
        </div>
      </div>
      <div className={stl.burger_menu_wrapper}>
        <img src={imgBurger} alt="menu" className={stl.burger_menu} />
      </div>
    </header>
  )
}
