import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {UserCard} from './UserCard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      <UserCard/>
    }
   
  </React.StrictMode>
);

reportWebVitals();
