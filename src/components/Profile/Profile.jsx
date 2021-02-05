import React from 'react';
import s from './Profile.module.scss';

export default function Profile() {
  return (
    <main className="main">
      <div className="profile--header-img--container"></div>
      <div className="ava">ava + description</div>
      <div className="posts">
        <div className="post--item">post 1</div>
        <div className="post--item">post 2</div>
      </div>
    </main>
  )
}
