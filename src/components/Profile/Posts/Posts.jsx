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
    </div>
  )
}
