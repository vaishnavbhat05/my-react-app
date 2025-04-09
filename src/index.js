import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Goal from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './car4.js';


// const cars = ['Ford', 'BMW' , 'Ferrari'];
// const myElement = <Car brand="Ford" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Garage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
