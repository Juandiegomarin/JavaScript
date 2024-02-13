import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import AppLogin from './componentes/AppLogin.js';
import Menu from './componentes/Menu.js';

function App() {
  const [item, setItem] = useState(null);
  const [logged, setLogged] = useState(false);
  const [usuarios, setUsuarios] = useState(
    [
      {userId: "jorge@gmail.com", password:"1234"},
      {userId: "dario@gmail.com", password:"1234"}
    ]
  );
  const [info, setInfo] = useState("");

  function handleClickMenu(clickedItem){
    setItem(clickedItem);
  }

  function handleSubmit(event){
    event.preventDefault();

    const sendUserId = event.target.email.value;
    const sendUserPsw = event.target.password.value;


    console.log("Logeado: " + checkLogin(sendUserId, sendUserPsw));
    setLogged(checkLogin(sendUserId, sendUserPsw));
  }

  function checkLogin(idToCheck, pswToCheck){
    let correct = false;
    if (idToCheck !== "" && pswToCheck !== ""){
      const usuariosAux = JSON.parse(JSON.stringify(usuarios));
      usuariosAux.map(user => {
        // Si corresponde a algún usuario registrado devuelvo que loggea (true)
        if (user.userId === idToCheck && user.password === pswToCheck){
          correct = true;
        }
      })
      if (!correct) {
        setInfo("El usuario o la contraseña no son correctos");
      }
    } else {
      setInfo("Cumplimente todos los campos");
    }
    
    // Si no corresponde a ninguno, devuelvo que no loggea (false)
    return correct;
  }

  return (
    <div className="App">
      {logged ? <Menu menuItem={item} handleClick={(clickedItem) => handleClickMenu(clickedItem)} />:<AppLogin handleSubmit={handleSubmit} info={info} />}
    </div>
  );
}

