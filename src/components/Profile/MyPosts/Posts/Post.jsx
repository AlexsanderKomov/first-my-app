import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

   return (
      <div className={s.item}>
         <img src="https://i02.fotocdn.net/s116/1dd9b6cbafee0f32/user_l/2651526817.jpg" />
         {props.message}
         <div>
            <span>Like</span> {props.likesCount}
         </div>
      </div>
   );
}

export default Post;

