import React from 'react';
import c from './Dialogs.module.css';
import DialogItems from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
        <div className={c.dialog_items}>
          <DialogItems name='Artem' id='1'/>
          <DialogItems name='Dima' id='2'/>
          <DialogItems name='Alex' id='3'/>
          <DialogItems name='Semen' id='4'/>
          <DialogItems name='Maksim' id='5'/>
        </div>

        <div className={c.messages}>
          <Message message='Hi'/>
          <Message message='How are you'/>
          <Message message='Nice to meet you'/>
        </div>
    </div>
  );
}

export default Dialogs;