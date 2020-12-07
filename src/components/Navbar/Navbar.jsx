import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';


const Navbar = (props) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
         </div>
         <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' activeClassName={s.active}>Massage</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/setting' activeClassName={s.active}>Setting</NavLink>
         </div>
         <div className={s.friends}>
            <Friends state={props.state.friendsPage} />
         </div>
      </nav>
   );
}

export default Navbar;