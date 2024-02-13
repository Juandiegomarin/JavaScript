import React, { useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import AppLogin from './componentes/AppLogin';
import Menu from './componentes/Menu';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItem: "UNO",
      logged: false,
      usuario:false,
    }
  }

  // al hacer click mira el param que le ha pasado al pulsar el boton
  // cambia el estado de menuItem para que al pasarlo por el menu cambie de color
  cambiarColor(param) {
    console.log(param)
    this.setState({ menuItem: param })
  }


  // mira si el que se logea es bueno o no para mostrar el menu
  userLogin(telefono, password) {
    if (telefono=="admin" && password=="1234") {
      this.setState({ logged: true })
      this.setState({ usuario: true })
    }
  }

  
  render() {
    // el la variable objeto guardo el menu y dependiendo de el estado logged
    // obj será el menu o el login, por lo que si estas logueado te enseña el menu
    // si no lo estas te enseña el login
    let obj = <Menu menuItem={this.state.menuItem} cambiaColor={(e) => this.cambiarColor(e)} />

    if(!this.state.logged){
      // Le paso el tlf y la clave para que confirme que se puede logear
      obj=<AppLogin userLogin={(tlf, clave)=>this.userLogin(tlf, clave)}  usuMalo={this.state.usuario}/>
    }

    return (
      <div className="App">
        {obj}
      </div>
    );
  };

}

export default App;