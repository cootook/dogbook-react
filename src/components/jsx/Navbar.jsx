import React from 'react';
import stl from '../scss/Navbar.module.scss';
// import profileLogo from '../images/pets-charly.png';

export default function Navbar() {
  return (
    <nav className={stl.container}>
      <div className={`${stl.profile_logo__container}`}>
        <a href="#1" className={`${stl.item__link} ${stl.profile_logo}`}>
        </a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>News</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Profile</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Messages</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Communities</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Spots</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Clinics</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Instructors</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Map</a></div>
      <div className={stl.item}><a href="#1" className={stl.item__link}>Settings</a></div>
    </nav>
  )
}
