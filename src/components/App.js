import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Login from '../Login/Login'

function App() {
  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className="display-4">Тут будет форма авторизации и регистрации</h1>
      </div>
      <Login />
    </div>
  );
}

export default App;
