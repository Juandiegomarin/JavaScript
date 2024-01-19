import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Altas= (props)=>{
// UTILICE HOOKS EN ESTE COMPONENTE
return (
<Form>
<FormGroup>
<Label for="Nombre">Nombre:</Label>
<Input name="nombre" id="nombre" placeholder="introduzca

nombre"/>

<Label for="Nombre">Apellidos:</Label>
<Input name="apellidos" id="apellidos"

placeholder="introduzca apellidos"/>

<Label for="Nombre">Telefono:</Label>
<Input name="telefono" id="telefono" placeholder="introduzca

telefono" />
</FormGroup>
<Button>Añadir</Button>
</Form>
);

}

//DWEC. Desarrollo Web en Entorno Cliente

const Mostrar= (props)=>{
// ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
}

class App extends Component{
constructor(props) {
super(props);
this.state = {
// INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA
//INFORMACIÓN DE LA APLICACIÓN. EL LISTÍN TELEFÓNICO
};
}
render(){
return (
<div className="App">
// DEBERÁ RENDERIZAR AL MENOS LOS DOS COMPONENTES ANTERIORES
</div>
);
}
}
export default App;
