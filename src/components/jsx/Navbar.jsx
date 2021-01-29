import React from 'react';
// import profileLogo from '../images/pets-charly.png';

export default function Navbar() {
  return (
    <nav className="nav nav--container">
      <div className="nav nav--item nav--item--profile-logo--container"><a href="#1" className="nav nav--item--link nav--item nav--item--profile-logo--link">
        </a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">News</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Profile</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Messages</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Communities</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Spots</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Clinics</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Instructors</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Map</a></div>
      <div className="nav nav--item"><a href="#1" className="nav nav--item--link">Settings</a></div>
    </nav>
  )
}
