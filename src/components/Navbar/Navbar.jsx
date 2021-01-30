import React from 'react';
import stl from './Navbar.module.scss';
import Link from './Link/Link';
// import profileLogo from '../images/pets-charly.png';

export default function Navbar() {
  return (
    <nav className={stl.container}>
      <div className={`${stl.profile_logo__container}`}>
        <a href="#1" className={`${stl.item__link} ${stl.profile_logo}`}>
        </a></div>
      <Link linkTitle='News' />
      <Link linkTitle='Profile' />
      <Link linkTitle='Messages' />
      <Link linkTitle='Communities' />
      <Link linkTitle='Spots' />
      <Link linkTitle='Clinics' />
      <Link linkTitle='Instructors' />
      <Link linkTitle='Map' />
      <Link linkTitle='Settings' />
    </nav>
  )
}
