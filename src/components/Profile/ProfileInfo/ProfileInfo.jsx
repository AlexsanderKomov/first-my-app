import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div>
         <div>
            <img id='imgContent' src='https://a-static.besthdwallpaper.com/yarkie-abstraktnye-ogni-oboi-2304x768-17204_103.jpg' />
         </div>
         <div className={s.descriptionBlock}>
            ava + description
      </div>
      </div>
   )
}

export default ProfileInfo;