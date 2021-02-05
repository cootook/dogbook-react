import React from 'react';
import { Link } from 'react-router-dom';
import stl from './NavLink.module.scss';

export default function NavLink(props) {
  return (
    <div className={stl.item}>
      <Link to={props.linkTitle} className={stl.item__link}>{props.linkTitle}</Link>
      {/* <a href="#1" className={stl.item__link}>{props.linkTitle}</a> */}
    </div>
  )
}
