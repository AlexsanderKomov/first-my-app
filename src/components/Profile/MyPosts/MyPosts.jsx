import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3> My post </h3>
         <div>
            <div>
               <textarea autoFocus onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Начни писать первый!' />
            </div>
            <div>
               <button className={s.button} onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;