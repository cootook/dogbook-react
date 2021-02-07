import React from 'react';
import Posts from '../Posts/Posts';
import s from './PostFromArr.module.scss';

export default function PostFromArr(props) {
  const generatePosts = (postArr) => {
    return postArr.map(post => {
      return <Posts title={post.title} post={post.text} />
    })
  }


  return (

    <div className={s.posts}>
      {generatePosts(props.postArr)}
    </div>

  )
}
