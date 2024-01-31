import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function Botonera(props) {



  let aux = [];
  for (let i = 0; i < props.tablero.length; i++) {
    let arr = [];
    for (let j = 0; j < props.tablero[i].length; j++) {
      if (props.tablero[i][j] == "verde") {
        arr.push(<Button key={i + "" + j} className="relleno" color='success' onClick={() => props.mover(i,j)}></Button>);
      } else if (props.tablero[i][j] == "azul") {
        arr.push(<Button key={i + "" + j} className="relleno" color='primary' onClick={() => props.mover(i,j)}></Button>);
      } else {
        arr.push(<Button key={i + "" + j} className="relleno" color="outline" onClick={() => props.mover(i,j)}></Button>);
      }

    }
    aux.push(arr);
    aux.push(<br></br>);
  }

  return aux;

}
class App extends Component {
  constructor(props) {

    //DAMAS. EXAMEN REACTJS.

    super(props);
    this.state = {
      matriz: Array(8).fill(0),
      jugadorActual: 1,
      texto: "mueve una ficha",
      fichaSelccionada: false,
      coordenadasFichaSeleccionada: [],
    };
  }

  componentWillMount() {

    let aux = [];
    for (let i = 0; i < this.state.matriz.length; i++) {
      let arr = [];
      for (let j = 0; j < this.state.matriz.length; j++) {

        if (i < 3 || i > 4) {
          if (((i == 0 || (i % 2 == 0)) && j % 2 != 0) || ((i % 2 != 0) && ((j == 0 || j % 2 == 0)))) {
            if (i < 3) {
              arr.push("verde");
            } else if (i > 4) {
              arr.push("azul");
            }
          } else {
            arr.push(0);
          }
        } else {
          arr.push(0);
        }
      }
      aux.push(arr);
    }
    this.setState({ matriz: aux });
  }
  cambiar = (idestino, jdestino) => {

    // si no se ha seleccionado ficha y el jugador actual es el 1 y hemos clickado sobre una ficha del jugador 1 (azul)
    if (!this.state.fichaSelccionada && this.state.jugadorActual === 1 && this.state.matriz[idestino][jdestino] === "azul") {
      console.log("Hola 1")
      // setear los estados de texto, para saber que ficha se ha selccionado y dar paso a mover la ficha poniendo la ficha seleccionada a true
      this.setState({ texto: "selecciona destino, ficha seleccionada " + idestino + "," + jdestino, fichaSelccionada: true, coordenadasFichaSeleccionada: [idestino, jdestino] })

      // si no se ha seleccionado ficha y el jugador actual es el 2 y hemos clickado sobre una ficha del jugador 2 (verde)
    }

    if (!this.state.fichaSelccionada && this.state.jugadorActual === 2 && this.state.matriz[idestino][jdestino] === "verde") {
      console.log("Hola 2")
      // setear los estados de texto, para saber que ficha se ha selccionado y dar paso a mover la ficha poniendo la ficha seleccionada a true
      this.setState({ texto: "selecciona destino, ficha seleccionada " + idestino + "," + jdestino, fichaSelccionada: true, coordenadasFichaSeleccionada: [idestino, jdestino] })

      // si la ficha ha sido seleccionada y el jugador actual es el 1 , solo mover hacia arriba
    }
    if (this.state.fichaSelccionada && this.state.jugadorActual === 1 && idestino === this.state.coordenadasFichaSeleccionada[0] - 1 && jdestino === this.state.coordenadasFichaSeleccionada[1] + 1 || idestino === this.state.coordenadasFichaSeleccionada[0] - 1 && jdestino === this.state.coordenadasFichaSeleccionada[1] - 1 && this.state.matriz[idestino][jdestino] !== "azul") {
      console.log("Hola 3")
      // mover la ficha origen a la coordenada que viene por parametro (destino)
      let copiaEstado = this.state.matriz.slice()
      copiaEstado[idestino][jdestino] = "azul"
      copiaEstado[this.state.coordenadasFichaSeleccionada[0]][this.state.coordenadasFichaSeleccionada[1]] = 0
      this.setState({ matriz: copiaEstado, jugadorActual: 2, texto: "mueve una ficha", fichaSelccionada: false })

      // si la ficha ha salido seleccionada y el jugador actual es el 2, solo mover hacia abajo
    }
    if (this.state.fichaSelccionada && this.state.jugadorActual === 2 && idestino === this.state.coordenadasFichaSeleccionada[0] + 1 && jdestino === this.state.coordenadasFichaSeleccionada[1] + 1 || idestino === this.state.coordenadasFichaSeleccionada[0] + 1 && jdestino === this.state.coordenadasFichaSeleccionada[1] - 1 && this.state.matriz[idestino][jdestino] !== "verde") {
      console.log("Hola 4")
      // mover la ficha origen a la coordenada que viene por parametro (destino)
      let copiaEstado = this.state.matriz.slice()
      copiaEstado[idestino][jdestino] = "verde"
      copiaEstado[this.state.coordenadasFichaSeleccionada[0]][this.state.coordenadasFichaSeleccionada[1]] = 0
      this.setState({ matriz: copiaEstado, jugadorActual: 1, texto: "mueve una ficha", fichaSelccionada: false })

    }
    
  }

  render() {
    return (
      <div className="App">
        <p>{"Jugador " + this.state.jugadorActual}: {this.state.texto}</p>
        <Botonera tablero={this.state.matriz} mover={this.cambiar} />
      </div>
    );
  }
}
export default App;
