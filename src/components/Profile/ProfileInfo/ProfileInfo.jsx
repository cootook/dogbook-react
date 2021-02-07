import React from 'react';
import s from './ProfileInfo.module.scss';
import wallPaper from '../../__images/wall.png'

export default function ProfileInfo() {
  return (
    <div className={s.p}>
      <div className={s.wallpaper} style={{ backgroundImage: `url(${wallPaper})` }}>
        <div className={s.name}>
          <h2> User </h2>
          <h2> Name </h2>
        </div>
      </div>
    </div>
  )
}
