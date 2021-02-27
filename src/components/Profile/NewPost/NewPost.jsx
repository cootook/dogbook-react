import React from 'react';
import s from './NewPost.module.scss';

export default function NewPost(props) {

  const newPost = React.createRef();
  const addPost = () => {
    const text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = '';
  }

  return (

    <div className={s.newPost}>
      <div>
        <textarea ref={newPost} name="new post" id="123" cols="50" rows="10"></textarea>
      </div>
      <div>
        <button onClick={addPost} className={s.newPostBtn}>add post</button>
      </div>
    </div>

  )
}
