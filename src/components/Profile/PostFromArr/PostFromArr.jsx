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
  const newPost = React.createRef();
  const addPost = () => {
    const text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = '';
  }

  return (

    <div className={s.posts}>
      <div>
        <textarea ref={newPost} name="new post" id="123" cols="50" rows="10"></textarea>
      </div>
      <div>
        <button onClick={addPost} >add post</button>
      </div>
      {generatePosts(props.postArr)}

    </div>

  )
}
