import React from 'react';
import Posts from '../Posts/Posts';
import s from './PostFromArr.module.scss';

export default function PostFromArr(props) {

  return (

    <div className={s.posts}>
      {
        props.postArr.map(post => {
          return <Posts title={post.title} post={post.text} like={post.like} dislike={post.dislike} comments={post.comments} />
        })
      }
    </div>

  )
}
