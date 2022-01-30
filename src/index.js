import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseInit from './firebase'

firebaseInit();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
