import React from 'react';
import { Route } from 'react-router-dom';
import stl from './Dialog.module.scss';
import Message from './Message/Message';

export default function Dialog(props) {

  const MessFromArr = (props) => {
    // my id is 5
    return props.map((m, i) => {
      const path = `/Messages/${m.id}`;
      return (
        <Route path={path}>
          <Message messages={m.messages} />
        </Route>
      )
    })

  }

  return (
    <div className={stl.d}>
      {MessFromArr(props.dialog)}
    </div>
  )
}
