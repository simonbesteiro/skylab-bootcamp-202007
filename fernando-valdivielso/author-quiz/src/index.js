import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from './components/AuthorQuiz'


ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
