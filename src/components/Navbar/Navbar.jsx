import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import stl from './Navbar.module.scss';
import NavLink from './NavLink/NavLink';
// import profileLogo from '../images/pets-charly.png';

export default function Navbar() {
  return (
    <nav className={stl.container}>
      <BrowserRouter>
        <div className={`${stl.profile_logo__container}`}>
          <Link to='Profile' className={`${stl.item__link} ${stl.profile_logo}`}></Link>
        </div>

        <NavLink linkTitle='News' />
        <NavLink linkTitle='Profile' />
        <NavLink linkTitle='Messages' />
        <NavLink linkTitle='Communities' />
        <NavLink linkTitle='Spots' />
        <NavLink linkTitle='Clinics' />
        <NavLink linkTitle='Instructors' />
        <NavLink linkTitle='Map' />
        <NavLink linkTitle='Settings' />
      </BrowserRouter>
    </nav>
  )
}
