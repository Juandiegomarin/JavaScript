import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import React, { useState } from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*              ENUNCIADO DEL EJERCICIO.

Se pide que realices el programa que visualizas en el video adjunto.

Se considerará incorrecto un programa que acumule la funcionalidad en solo un componente o cambie la estructura de clases.

Cosas que se valorarán:
Legibilidad del código.
Longitud del código.
No se valorará el aspecto estético de la web.
El programa realiza la funcionalidad requerida.
Que no haya errores en la consola.
La eficiencia.
La modularidad (alta cohesión y bajo acoplamiento).
Que el código sea limpio, flexible, reutilizable y mantenible.
Sigue los principios SOLID.
Otros criterios.

A continuación se describen los componentes que tienes que implementar para completar este ejercicio:

-----------COMPONENTE PREGUNTAS-----------
Es el encargado de mostrar la pregunta al usuario

-----------COMPONENTE VENTANAMODAL-----------
Es el encargado de mostrar el resultado del test y preguntar si lo quiere hacer de nuevo

-----------PREGUNTAS------------
Las preguntas se muestran de manera aleatoria. Para ello te proporciono la función aleatorio que siempre hemos utilizado.

Importante const PREGUNTAS: 
  EN LAS PREGUNTAS SI RESPUESTA ES 1 Y EL USUARIO ESCOJE SI -> ES NOMOFÓBICO (No nomofóbico en caso contrario)
  Y SI EL USUARIO ELIGE NO Y RESPUESTA ES 0 -> EL USUARIO ES NOMOFÓBICO (No nomofóbico en caso contrario)

-----------RESPUESTAS-----------
DEPENDIENDO DE LAS RESPUESTAS:
Al final de las preguntas y atendiendo las respuestas...
    Si el porcentaje de las respuestas es < 50 mostrará En principio no tienes nada de que preocuparte"
    Si el porcentaje de las respuestas es entre 50-69 mostrará "Empiezas a tener signos de dependencia del móvil. Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc."
    Si el porcentaje de las respuestas es entre 70-79 mostrará "Tienes una gran dependencia del móvil. Deberías seguir un plan de «desintoxicación» del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc."
    Si el porcentaje de las respuestas es >= 80 mostrará "Tus síntomas de dependencia son muy preocupantes. Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional."

*/

const PREGUNTAS = [
  { "pregunta": "Cuando mandas un mensaje por whatsapp esperas siempre al doble check. Si no aparece vuelves a abrir el terminal para revisarlo al rato.", "respuesta": 1 },
  { "pregunta": "Antes de acostarte siempre miras el móvil a ver si tienes mensajes o notificaciones.", "respuesta": 1 },
  { "pregunta": "Te despiertas antes de tiempo para jugar, mandar mensajes, actualizar perfiles,… con el teléfono móvil.", "respuesta": 1 },
  { "pregunta": "Si sales de casa sin el móvil volverías a cogerlo aunque llegues tarde a tu cita.", "respuesta": 1 },
  { "pregunta": "No tienes miedo a quedarte sin batería.", "respuesta": 0 },
  { "pregunta": "Cuando tienes la batería baja desactivas ciertas aplicaciones u opciones del teléfono como la WiFi, bluetooth para no quedarte sin batería.", "respuesta": 1 },
  { "pregunta": "Tienes ansiedad cuando tienes llamadas perdidas. Llamas a los números y te preocupas si no responden.", "respuesta": 1 },
  { "pregunta": "Miras la cobertura cuando estas en algún sitio con los amigos, esperando, etc.", "respuesta": 1 },
  { "pregunta": "Sueles hacer alguna otra cosa mientras que miras al móvil como comer, lavarte los dientes, etc.", "respuesta": 1 },
  { "pregunta": "No sueles mirar la cobertura del móvil con frecuencia", "respuesta": 0 },
  { "pregunta": "Vas al baño siempre con el móvil.", "respuesta": 1 },
  { "pregunta": "A veces sales a la calle sin el móvil.", "respuesta": 0 }
];



const Preguntas = (props) => {
  
  //console.log(props.preguntas)
  let num = props.alea(0,props.preguntas.length-1)
  return (
    <div className="p-3 my-2 rounded bg-docs-transparent-grid">
      <Toast>
        <ToastHeader>
          TEST DE NOMOFOBIA
        </ToastHeader>
        <ToastBody>
          {props.preguntas[num].pregunta}
        </ToastBody>
        <div class="container">
          <div class="row justify-content-center">
            <Button outline color="secondary" onClick={()=>props.cambia(num,props.preguntas[num].respuesta,"SI")} >Si</Button>&nbsp;
            <Button outline color="secondary"  onClick={()=>props.cambia(num,props.preguntas[num].respuesta,"NO")}>No</Button>
          </div>
        </div>
      </Toast>
    </div>
  );

}

const VentanaModal = (props) => {
  const {
    className
  } = props;

  //console.log(props.aciertos)
  //console.log(props.fallos)

  let titulo="";
  let body="";

  if(props.aciertos===0 && props.fallos===0){
    titulo="Test de Nomofobia";
    body="Comenzar el test";

  }else{

    let porcentaje=(props.aciertos/(props.aciertos+props.fallos))*100
    titulo="Esta es tu nomofobia";

    if(porcentaje<50){
      body="En principio no tienes nada de que preocuparte";
    }else if(porcentaje>=50 && porcentaje<70){
      body="Empiezas a tener signos de dependencia del móvil. Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.";
    }else if(porcentaje>=70 && porcentaje<80){
      body="Tienes una gran dependencia del móvil. Deberías seguir un plan de «desintoxicación» del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc.";
    }else{
      body="Tus síntomas de dependencia son muy preocupantes. Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional."
    }
  }
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  const cambiar=()=>{
    setModal(!modal)
    props.cargar()

  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
        <ModalBody>
          {body}
        </ModalBody>
        <ModalFooter>
          {(props.aciertos===0 && props.fallos===0) && <Button color="primary" onClick={toggle}>Seguir</Button>}
          {(props.aciertos!==0 && props.fallos!==0) && <Button color="primary" onClick={cambiar}>Volver a Repetir</Button>}
          
          {(props.aciertos===0 && props.fallos===0) && <Button color="secondary" onClick={toggle}>Salir</Button>}
          {(props.aciertos!==0 && props.fallos!==0) && <Button color="secondary" onClick={cambiar}>Salir</Button>}
          
        </ModalFooter>
      </Modal>
    </div>

  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preguntas: PREGUNTAS,
      aciertos: 0,
      fallos: 0,
      textoPregunta: "",
      respuesta: 0,
      finalizado: 1,
    };
  }
  componentDidMount() {
    // POR SI NECESITAS REALIZAR ALGO ANTES DE  QUE SE MONTE EL COMPONENTE
  }

  aleatorio(min, max) { //Devuelve un valor aleatorio entre min y max
    var horquilla = max - min;
    return Math.floor(Math.random() * horquilla + min);
  }
  cambiaPregunta(numPreg,valor,respuesta){

    //console.log("Pregunta:"+numPreg+", valor: "+valor+", Respuesta: "+respuesta)
    if(valor==1 && respuesta=="SI" || valor==0 && respuesta=="NO"){
      this.setState({aciertos:this.state.aciertos+1})
    }else{
      this.setState({fallos:this.state.fallos+1})
    }
   // console.log(this.state.aciertos+" Aciertos")
   // console.log(this.state.fallos+" Fallos")
    let copiaEstadoPreguntas=this.state.preguntas.slice();
    copiaEstadoPreguntas=copiaEstadoPreguntas.filter((p,index)=>index!==numPreg)
    this.setState({preguntas:copiaEstadoPreguntas})
    //console.log(this.state.preguntas)
    if((this.state.aciertos+this.state.fallos)!==PREGUNTAS.length-1){
      this.setState({finalizado:0})
    }else{
      this.setState({finalizado:1})
    }
  }

  cargarPreguntas(){
    this.setState({aciertos:0})
    this.setState({fallos:0})
    this.setState({preguntas:PREGUNTAS})
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {(this.state.aciertos+this.state.fallos)!==PREGUNTAS.length && <Preguntas preguntas={this.state.preguntas} alea={(min,max)=>this.aleatorio(min,max)} cambia={(numPreg,valor,respuesta)=>this.cambiaPregunta(numPreg,valor,respuesta)}/>}
          {this.state.finalizado===1 && <VentanaModal aciertos={this.state.aciertos} fallos={this.state.fallos} repetir={()=>this.repetir()} cargar={()=>this.cargarPreguntas()}/>}
          
        </header>
      </div>
    );
  }
}

export default App;
