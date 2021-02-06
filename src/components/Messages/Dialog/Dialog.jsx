import React from 'react';
import stl from './Dialog.module.scss';
import Message from './Message/Message';

export default function Dialog(props) {
  return (
    <div className={stl.d}>
      <Message message='hi' />
      <Message message='it is me' />
      <Message message='hello world' />
      <Message message='I like to walk with my dog' />
      <Message message='I WILL know this' />
    </div>
  )
}
