import React from 'react';
import stl from './Link.module.scss';

export default function Link(props) {
  return (
      <div className={stl.item}>
        <a href="#1" className={stl.item__link}>{props.linkTitle}</a>
      </div>
        )
}
