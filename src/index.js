import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './Redux/state'


let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);




