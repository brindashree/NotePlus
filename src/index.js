import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import reportWebVitals from './reportWebVitals';

// const firebase = require('firebase');
// require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD4vh1IrQAehghxD7ZIu6-Sx8pilVqkMyc",
    authDomain: "evernoteclone-377e1.firebaseapp.com",
    projectId: "evernoteclone-377e1",
    storageBucket: "evernoteclone-377e1.appspot.com",
    messagingSenderId: "399365598045",
    appId: "1:399365598045:web:43e4c1aeebcfaef24d56b4"
  };
  
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
