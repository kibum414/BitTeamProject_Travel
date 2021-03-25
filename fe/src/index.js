import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './sec/component/Login';
// import SignUp from './uss/component/SignUp';
// import UserEdit from './uss/component/UserEdit';
// import UserDetail from './uss/component/UserDetail';
// import UserList from './uss/component/UserList';
// import ArticleAdd from './bbs/component/ArticleAdd';
// import ArticleDetail from './bbs/component/ArticleDetail';
// import ArticleEdit from './bbs/component/ArticleEdit';
// import ArticleList from './bbs/component/ArticleList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
//import ParticipantForm from './pts/component/ParticipantRegisterForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();