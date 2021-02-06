import React from 'react';
import stl from './Message.module.scss';

export default function Message(props) {
  return (
    <div className={stl.m}>
      {props.message}
    </div>
  )
}
