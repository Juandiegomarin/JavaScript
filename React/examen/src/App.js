import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapaBotones = (props) => {

  let campo=props.listaBotones;
  let tablero=[];
  for (let i = 0; i < campo.length; i++) {
    let fila=[];
    for (let j = 0; j < campo[i].length; j++) {

        if (i == 0) {
          if(campo[i][j]==1){

            fila.push(<Button color='primary'>{i+"-"+j}</Button>);

          }else{

            fila.push(<Button outline onClick={() => props.clica(j)}>{i+"-"+j}</Button>);

          }

        } else {

          if(campo[i][j]==1){

            fila.push(<Button color='primary'>{i+"-"+j}</Button>);

          }else{

            fila.push(<Button outline>{i+"-"+j}</Button>);

          }
        }
    }
    tablero.push(fila);
    tablero.push(<br></br>);
    
  }
  return tablero;

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    }
  }
  clica(x) {
    let tablero=this.state.listaBotones;
    for (let i = 8; i >=0; i--) {
      if(tablero[i][x]==null){
        tablero[i][x]=1;
        break;
      }
    }
    this.setState({listaBotones:tablero})
  }
  componentWillMount() {
   
    for (let i = 0; i < this.state.listaBotones.length; i++) {
      this.state.listaBotones[i] = new Array(9).fill(null);
    }

  }
  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} clica={(x) => this.clica(x)} />
      </div>
    );
  }
}

export default App;
