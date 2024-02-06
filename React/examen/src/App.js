import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const VentanaModalDiccionario = (props) => {
  

  const [nombre,setNombre]=useState("");
  const [telefono,setTelefono]=useState("");


  const handleChange=(event)=>{

    if(event.target.name==="nombre"){
        
        setNombre(event.target.value)
        
    }
    if(event.target.name==="telefono"){
        
        setTelefono(event.target.value)
        
        
    }


  }
  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>

          <FormGroup row>
            <Label sm={2} > Nombre: </Label>
            <Col sm={10}>
              <Input 
                id="nombre"
                name="nombre"
                type="Text" 
                onChange={handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2} > Teléfono: </Label>
            <Col sm={10}>
              <Input 
                id="telefono"
                name="telefono"
                type="Text" 
                onChange={handleChange}/>
            </Col>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>props.add(nombre,telefono)}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>

  );
}

const Mostrar = (props) => {
    
  return (
    <ul>
      
          {props.personas.map(p=><li>{p.nombre}-{p.telefono}  <Button onClick={()=>props.borrar(p.telefono)}>Borrar</Button></li>)}
        
    </ul>
  );
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
      listaUsuarios: [],
      isOpen: false,

    };
  }



  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal() { this.setIsOpen(!this.state.isOpen); }

  addUser(nombre,telefono){
    
    if (nombre !== "" && telefono !== "" && !this.state.listaUsuarios.includes(telefono)) {
        const persona = {
            nombre: nombre,
            telefono: telefono
        }
    
        
        let listaCopia=this.state.listaUsuarios.slice();
        listaCopia.push(persona)
        this.setState({listaUsuarios:listaCopia})

    }
    this.setIsOpen(!this.state.isOpen);
  }


  render() {
    return (
      <div className="App">
        <h1>Listin teléfonico</h1>
        <Mostrar  personas={this.state.listaUsuarios} borrar={(telefono)=>this.eliminarUser(telefono)}/>
        <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
        <VentanaModalDiccionario
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          add={(nombre,telefono)=>this.addUser(nombre,telefono)}
          toggle={() => this.toggleModal()}
          titulo={"Alta en el listín"}
        />
      </div>
    );
  }
}
export default App;