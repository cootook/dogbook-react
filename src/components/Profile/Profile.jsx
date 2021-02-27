import React from 'react';
import PostFromArr from './PostFromArr/PostFromArr';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './NewPost/NewPost';

export default function Profile(props) {
  return (
    <div className={s.p}>
      <ProfileInfo />
      <NewPost />
      <PostFromArr postArr={props.posts} addPost={props.addPost} />
    </div>
  )
}
