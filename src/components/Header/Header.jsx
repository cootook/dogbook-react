import React from 'react';
import stl from './Header.module.scss';
import imgBurger from '../__icons/Burger.svg';

export default function Header() {
  return (
    <header className={stl.header}>
      <div className={stl.logo}>
        <div className={stl.logo_title}>Dogbook</div>
        <div className={stl.logo_subtitle}>find your dog</div>
      </div>
      <div className={stl.nav_menu}>
          <ul className={stl.nav_menu_ul}>
              <li className={`${stl.nav_menu_li} ${stl.paragraph_l} ${stl.link_active}`}><a href="#1">Join</a></li>
              <li className={`${stl.nav_menu_li} ${stl.paragraph_l}`}><a href="#1">Find</a></li>
              <li className={`${stl.nav_menu_li} ${stl.paragraph_l}`}><a href="#1">Help</a></li>
          </ul>
      </div>
      <div className={stl.burger_menu_wrapper}>
          <img src={imgBurger} alt="menu" className={stl.burger_menu}/>
      </div>
    </header>
  )
}
