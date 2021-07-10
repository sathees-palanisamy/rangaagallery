import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import ScrollToTop from './components/Util/ScrollToTop';


ReactDOM.render(

    <Root>
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>

   
    </BrowserRouter>
    </Root>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
