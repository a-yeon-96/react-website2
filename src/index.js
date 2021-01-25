import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Modecontrol from './modecontrol';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<Modecontrol />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
