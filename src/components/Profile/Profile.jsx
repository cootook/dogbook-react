import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile() {
  return (
    <div className={s.p}>
      <ProfileInfo />
      <div className={s.posts}>
        <Posts title='Hello World' post='slkdjf;lksjdf a;slkdjf jdsahgakjnavf;lsakje jsvnaskfj a;sfser ijjee asifj eedk eifja' />
      </div>

      <div className={s.posts}>
        <Posts title='Get started' post='slkdjf;lksjdf a;slkdjf jdsahgakjnavf;lsakje jsvnaskfj a;sfser ijjee asifj eedk eifja' />
      </div>

      <div className={s.posts}>
        <Posts title='Post post' post='slkdjf;lksjdf a;slkdjf jdsahgakjnavf;lsakje jsvnaskfj a;sfser ijjee asifj eedk eifja' />
      </div>

      <div className={s.posts}>
        <Posts title='Post 1' post='slkdjf;lksjdf a;slkdjf jdsahgakjnavf;lsakje jsvnaskfj a;sfser ijjee asifj eedk eifja' />
      </div>
    </div>
  )
}
