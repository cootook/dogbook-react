import React from 'react';
import s from './ProfileInfo.module.scss';
import wallPaper from '../../__images/wall.png'
import ava from '../../__images/userLogo/Liza.png'

export default function ProfileInfo() {
  return (
    <div className={s.p}>
      <div className={s.wallpaper} style={{ backgroundImage: `url(${wallPaper})` }}>
        {/* <img src={wallPaper} alt="wallpaper" /> */}
        <div className={s.ava}>
          <img src={ava} alt="ava" />
        </div>
        <div className={s.name}>
          <h2> User Name </h2>
        </div>
      </div>


    </div>
  )
}
