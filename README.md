## Simple-React-Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Folder structure

### store 

The Store folder contains the following files:

- Reducer.js: The root reducer that combines all the reducers listed in the "reducers" folder.
- configureStore.js: Connect middleware to the root reducer

The following reducers are placed in the "reducers" folder:

- postsReducer: Slice of the store that involves adding posts/comments.
- userReducer: Slice of the store that involves setting the user.

The following actions are placed in the "actions" folder:

- postActions: Actions to add post/comment.
- userActions: Actions to set user.

### components

Contains all the components used in the views.

### views

Contains Login and SocialFeed views.

### Layouts 

Contains resuable layouts that the views use.

