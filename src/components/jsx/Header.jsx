import React from 'react';
import imgBurger from '../icons/Burger.svg';

export default function Header() {
  return (
    <header className="start_screen_header">
      <div className="start_screen_logo">
        <div className="start_screen_logo_title">Dogbook</div>
        <div className="start_screen_logo_subtitle">find your dog</div>
      </div>
      <nav className="start_screen_nav_menu">
          <ul className="start_screen_nav_menu_ul">
              <li className="start_screen_nav_menu_li paragraph-l start_screen_link_active"><a href="#1">Join</a></li>
              <li className="start_screen_nav_menu_li paragraph-l"><a href="#1">Find</a></li>
              <li className="start_screen_nav_menu_li paragraph-l"><a href="#1">Help</a></li>
          </ul>
      </nav>
      <div className="burger_menu_wrapper">
          <img src={imgBurger} alt="menu" className="burger_menu"/>
      </div>
    </header>
  )
}
