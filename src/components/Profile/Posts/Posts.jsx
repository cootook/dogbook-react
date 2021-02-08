import React from 'react';
import s from './Posts.module.scss';

export default function Posts(props) {
  return (
    <div className={s.p}>
      <h3>
        {props.title}
      </h3>
      <section>
        {props.post}
      </section>
      <div className={s.like}>Like {props.like}.</div>
      <div className={s.dislike}>Dislike {props.dislike}.</div>
      <div className={s.comment}>
        <div className={s.userLogo}>

        </div>
        <div className={s.commentText}>
          text
        </div>
      </div>
    </div>
  )
}
