let rerenderEntireTree = () => {
   console.log('State changed');

}

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'How are you?', likesCount: 77 },
         { id: 2, message: "i'm from Russia", likesCount: 26 },
         { id: 3, message: "Good", likesCount: 1000 }
      ],
      newPostText: ''
   },
   dialogsPage: {
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'Yes Yes' },
         { id: 4, message: 'Russia' },
         { id: 5, message: 'Hello World!' }
      ],
      dialogs: [
         { id: 1, name: 'Sanya' },
         { id: 2, name: 'Vika' },
         { id: 3, name: 'Valera' },
         { id: 4, name: 'Vera' },
         { id: 5, name: 'Sasha' },
         { id: 6, name: 'Kisel' }
      ],
   },
   friendsPage: {
      friends: [
         { id: 1, name: 'Sanya' },
         { id: 2, name: 'Vika' },
         { id: 3, name: 'Valera' }
      ],
   },
}

window.state = state;

export const addPost = () => {
   let newPost = {
      id: 4,
      message: state.profilePage.newPostText,
      likesCount: 0
   };
   state.profilePage.posts.unshift(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer;
}




export default state;
