import React from 'react';
import stl from './HeaderLink.module.scss';

export default function HeaderLink(props) {
  const activeClass = props.isActive === 'true' ? stl.link_active : '';
  return (
      <div className={`${stl.nav_menu_li} ${activeClass} ${stl.paragraph_l}`}>
        <a href="#1">{props.linkTitle}</a>
      </div>
  )
}
