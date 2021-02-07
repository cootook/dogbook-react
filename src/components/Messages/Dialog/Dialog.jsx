import React from 'react';
import stl from './Dialog.module.scss';
import Message from './Message/Message';

export default function Dialog(props) {
  const messArr = [
    { message: 'Still it was a square of faint light.', id: 1 },
    { message: 'Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes.', id: 1 },
    { message: 'They were dropping, losing altitude in a canyon of rainbow foliage.', id: 1 },
    { message: 'Its hands were holograms that altered to match the convolutions of the blowers and the amplified breathing of the fighters.', id: 1 },
    { message: 'Images formed and reformed: a flickering montage of the Sprawl’s towers.', id: 1 },
    { message: 'Hello.', id: 1 },
    { message: 'it`s me.', id: 1 }
  ];
  const messFromArr = (arr) => {
    return arr.map(m => {
      return <Message message={m.message} id={m.id} />
    })

  }
  return (
    <div className={stl.d}>
      {messFromArr(messArr)}
    </div>
  )
}
