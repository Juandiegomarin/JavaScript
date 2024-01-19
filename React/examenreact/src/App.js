import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Altas = (props) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  

  return (
    <Form onSubmit={props.handleSubmit} >
      <FormGroup >
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="introduzca nombre"/>

        <Label for="Nombre">Apellidos:</Label>
        <Input name="apellidos" id="apellidos" placeholder="introduzca apellidos"/>

        <Label for="Nombre">Telefono:</Label>
        <Input name="telefono" id="telefono" placeholder="introduzca telefono"/>
      </FormGroup>
      <Button type='submit'>Añadir</Button>
    </Form>
  );

}

//DWEC. Desarrollo Web en Entorno Cliente

const Mostrar = (props) => {
  const listaPersonas = props.personas;
  return (
    <ol>
      {listaPersonas.map((p) => <li>{p}<Button onClick={() => props.handleBorrar(p)}>X</Button></li>)}
    </ol>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: ["Juan Diego Marin Morales 1234 ", "Alberto Collado Araujo 1324 "],
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let nombre = event.target.nombre.value;
    let apellidos = event.target.apellidos.value;
    let telefono = event.target.telefono.value;
    let listaAux = this.state.personas;

    let persona = nombre + " " + apellidos + " " + telefono;
    let bool = false;

    listaAux.map(p => {
      if (p.match(telefono)) {
        bool = true;
      }
    })
    if (!bool) {
      listaAux.push(persona);
      this.setState({ personas: listaAux })
    }

  }
  handleBorrar(persona) {

    const listaAux = this.state.personas;
    const listaNueva = listaAux.filter(p => p !== persona);

    this.setState({ personas: listaNueva })
  }
  render() {
    return (
      <div className="App">
        <Mostrar personas={this.state.personas} handleBorrar={(persona) => this.handleBorrar(persona)} />
        <Altas handleSubmit={(e) => this.handleSubmit(e)} />

      </div>
    );
  }
}
export default App;