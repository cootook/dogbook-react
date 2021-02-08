import React from 'react';
import Posts from '../Posts/Posts';
import s from './PostFromArr.module.scss';

export default function PostFromArr(props) {
  const generatePosts = (postArr) => {
    return postArr.map((post, i) => {
      const uniqKey = i.toString();
      return <Posts keyPostArr={uniqKey} title={post.title} post={post.text} like={post.like} dislike={post.dislike} comments={post.comments} />
    })
  }

  return (

    <div className={s.posts}>
      {generatePosts(props.postArr)}

    </div>

  )
}
