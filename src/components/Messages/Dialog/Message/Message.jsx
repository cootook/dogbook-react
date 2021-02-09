import React from 'react';
import stl from './Message.module.scss';

export default function Message(props) {
  // my id is 5
  const MessageItem = (mess) => {
    const classAlign = mess.id === 5 ? stl.mRight : stl.mLeft;
    return (
      <div className={classAlign}>
        {mess.message}
      </div>
    )
  }
  const MessageItems = (arr) => {
    return arr.map(item => {
      return <MessageItem id={item.id} message={item.message} />
    })
  }
  return (
    <div className={stl.m}>
      {console.log(props.message)}
      <MessageItems messages={props.message} />
    </div>
  )
}
