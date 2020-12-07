import React from 'react';
import s from './FriendsFace.module.css';


const FriendsFace = (props) => {
   return (
      <div className={s.fr}>
         <div className={s.name} >
            <img src='https://avatars.mds.yandex.net/get-zen_doc/28064/pub_5a62fa1c482677a2e649388c_5a62fa379b403c54425784e3/scale_1200' height='30px' />
            {props.name}
         </div>
      </div >
   )
}

export default FriendsFace;