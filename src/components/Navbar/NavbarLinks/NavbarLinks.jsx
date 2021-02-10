import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import stl from './NavbarLinks.module.scss';

export default function NavbarLinks(props) {
  return props.linkTitles.map(linkTitle => {
    return (
      <div className={stl.item}>
        <Link to={`/${linkTitle}`} className={stl.item__link}>{linkTitle}</Link>
      </div>
    )
  })
}
