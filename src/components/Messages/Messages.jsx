import React from 'react';
import Dialog from './Dialog/Dialog';
import Dialogs from './Dialogs/Dialogs';
import stl from './Messages.module.scss';

export default function Messages(props) {
  return (
    <div className={stl.m}>
      <Dialogs />
      <Dialog />
    </div>
  )
}
