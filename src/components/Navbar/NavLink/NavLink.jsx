import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import stl from './NavLink.module.scss';

export default function NavLink(props) {
  return (
    <div className={stl.item}>
      <Link to={`/${props.linkTitle}`} className={stl.item__link}>{props.linkTitle}</Link>
    </div>
  )
}
