import React from 'react';
import s from './Friends.module.css';
import FriendsFace from './FriendsFace/FriendsFace';



const Friends = (props) => {
   let myFriends = props.state.friends.map(f => <FriendsFace name={f.name} ava={f.ava} />)


   return (
      <div>
         <div className={s.fr}>
            <h2> Friends </h2>
         </div>
         <div>
            {myFriends}
         </div>
      </div>
   )
}

export default Friends;