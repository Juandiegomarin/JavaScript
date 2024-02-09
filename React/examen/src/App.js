import React, { Component, useState } from "react";
import { Button, Input, FormGroup, Label, Col, Table, ButtonGroup} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const Saldo=(props)=>{
  //GESTIÓN DE SALDO (SUMAR Y GASTAR)
  const [telefono,setTelefono] = useState("");
  const [saldo,setSaldo] = useState("");
  const [campo,setCampo] = useState("");

 const handleChange = (event) => {

    if(event.target.name == "telefono"){

      setTelefono(event.target.value)
    }

    if(event.target.name == "saldo"){

      setSaldo(event.target.value)
    }
 }


 const handleClick = () =>{

  if(telefono == "" || saldo == ""){

    setCampo("CAMPOS VACIOS")

  }

  

 }

 return (
   <div>
     <h3>{props.titulo}</h3>
     <FormGroup row>
       <Label sm={1} > Teléfono: </Label>
       <Col sm={2}>
         <Input
           id="telefono"
           name="telefono"
           type="Text" onChange={handleChange} />
       </Col>
       <Label sm={1} > Saldo: </Label>
       <Col sm={2}>
         <Input
           id="saldo"
           name="saldo"
           type="Number" onChange={handleChange} />
       </Col>
     </FormGroup>
     <Button color="primary" onClick={handleClick}>ACTUALIZAR</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     {campo}
   </div>


 ); 
}


const Altas = (props) => {
// ALTAS DE USUARIOS

const [nombre,setNombre] = useState("");
const [telefono2,setTelefono2] = useState("");
const [saldo2,setSaldo2] = useState("");
const [campo2,setCampo2] = useState("");


 const handleChange = (event) => {

  if(event.target.name == "nombre"){

    setNombre(event.target.value)
  }

  if(event.target.name == "telefono"){

    setTelefono2(event.target.value);
  }

  if(event.target.name == "saldo"){

    setSaldo2(event.target.value);
   
  }
 }

 const handleClick = () =>{

  if(nombre == "" || telefono2 == "" || saldo2 == ""){

    setCampo2("CAMPOS VACIOS")

  }else{
    
   props.agregar(nombre,telefono2,saldo2)
  }

 }


 return (
   <div>
     <h3>Alta de usuario</h3>
     <FormGroup row>
       <Label sm={1} > Nombre: </Label>
       <Col sm={3}>
         <Input
           id="nombre"
           name="nombre"
           type="Text" onChange={handleChange} />
       </Col>
       <Label sm={1} > Teléfono: </Label>
       <Col sm={2}>
         <Input
           id="telefono"
           name="telefono"
           type="Text" onChange={handleChange} />
       </Col>
       <Label sm={1} > Saldo: </Label>
       <Col sm={2}>
         <Input
           id="saldo"
           name="saldo"
           type="Number" onChange={handleChange} />
       </Col>
     </FormGroup>
     <Button color="primary" onClick={handleClick}>ALTA</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     {campo2}
   </div>


 );
}


const Mostrar = (props) => {
 // ESTE COMPONENTE MUESTRA LA TABLA
  let boton = [];
 props.datos.map(e=>{
  boton.push(<Button onClick={()=>props.borrar(e)}>Borrar</Button>)
 })
 return (
   <>
<Table striped bordered hover size="sm">
       <thead>
         <tr>
           <th></th>
           <th>Teléfono</th>
           <th>Nombre</th>
           <th>Saldo</th>
         </tr>
       </thead>
       <tbody>
       <tr>
     <td>{boton}</td>
     <td>{props.datos.nombre}</td>
     <td>{props.datos.telefono}</td>
     <td>{props.datos.saldo}</td>
   </tr>
  </tbody>
     </Table>
   </>
 );
};






class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
     listaUsuarios: [],
     opcion: 0,
     isOpen:false,
   };
 }



 repetido(tel){

  return this.state.listaUsuarios.find(x=> x.telefono == tel) != undefined;
 }

 agregar(n,t,s){
  console.log("hola");
  if(!this.repetido(telefono)){
    let copia_array = this.state.listaUsuarios;
    let nuevo_user = {
      nombre:n,
      telefono:t,
      saldo:s
    }
    copia_array.push(nuevo_user);
    this.setState({listaUsuarios:copia_array})
  }
 }

 borrar(t){
  let copia_lista = this.state.listaUsuarios;
  copia_lista = copia_lista.filter(x=> x.t !== t);
  this.setState({listaUsuarios:copia_lista})
 }

 render() {
   return (
     <div className="App">
       <h1>GESTION USUARIOS</h1>
       <Mostrar datos={this.state.listaUsuarios} borrar={(t) => this.borrar(t)}  />
       <ButtonGroup>
         <Button color="info" isOpen={this.state.isOpen} opcion={this.state.opcion} OnClick={()=>this.abrir(0)}>
           Alta usuario
         </Button>
         <Button color="success" isOpen={this.state.isOpen} opcion={this.state.opcion} OnClick={()=>this.abrir(1)}>
           Sumar saldo
         </Button>
         <Button color="danger" isOpen={this.state.isOpen} opcion={this.state.opcion} onClick={()=>this.abrir(2)} >
           Gastar saldo
         </Button>
       </ButtonGroup>
      <Altas isOpen={!this.state.isOpen} listaUsuarios={this.state.listaUsuarios} agregar={(n,t,s)=>this.agregar(n,t,s)}/>  
     </div>
   );
 }
}
export default App;
