import React, { useState,useEffect,createContext } from 'react';
import UserList from './Componentes/UserList';
import UserForm from './Componentes/UserForm';
import './App.css';


function App() {
  const [users,setContador]=useState(
    [
      { id: 1, name: "perico", email: "perico@myfpschool.com" },
      { id: 2, name: "juanico", email: "juanico@myfpschool.com" },
      { id: 3, name: "andrés", email: "andrés@myfpschool.com" }
    ]
  );

  function handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    let tmp = this.state.users;
    tmp.push(user);
    this.setState({
      users: tmp
    });
  }

  return(
    <div className="App">
      <div>
          <p><strong>Añade usuarios</strong></p>
          <UserList users={users}/>
          <UserForm onAddUser={(e) => handleOnAddUser(e)} />
        </div>
    </div>
  );
}

export default App;