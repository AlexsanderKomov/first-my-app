import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';


const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
   let messagesElements = props.state.messages.map(m => <Messages message={m.message} />)

   let newMessageElement = React.createRef();

   let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text)
   }


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div>
            <textarea ref={newMessageElement} className={s.textarea}></textarea>
         </div>
         <div>

         </div>
         <div>
            <button onClick={addMessage} className={s.button}>Add message</button>
         </div>


      </div>
   )
}

export default Dialogs;