import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from 'react';
function Botonera(props) {

  const [color,setColor]=useState("");
  const [posicionI,setPosicionI]=useState(0);
  const [posicionJ,setPosicionJ]=useState(0);

  const toogle=(color,i,j)=>{
    setColor(color)
    setPosicionI(i)
    setPosicionJ(j)
  }
  

  let aux = [];
  for (let i = 0; i < props.tablero.length; i++) {
    let arr = [];
    for (let j = 0; j < props.tablero[i].length; j++) {
      if (props.tablero[i][j] == "verde") {
        arr.push(<Button className="relleno" color='success' onClick={()=>toogle(props.tablero[i][j],i,j)}></Button>);
      } else if (props.tablero[i][j] == "azul") {
        arr.push(<Button className="relleno" color='primary' onClick={()=>toogle(props.tablero[i][j],i,j)}></Button>);
      } else {
        arr.push(<Button className="relleno" onClick={()=>props.mover(color,posicionI,posicionJ,i,j,props.tablero)}></Button>);
      }

      /*if (props.tablero[i][j] == 1) {
        if (i > 4) {
          arr.push(<Button className="relleno" color='success'></Button>);
        } else if (i < 3) {
          arr.push(<Button className="relleno" color='primary'></Button>);
        } else {
          arr.push(<Button className="relleno" ></Button>);
        }
      } else {
        arr.push(<Button className="relleno"></Button>);
      }
*/
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
  handleActualizar(tablero){

    this.setState({matriz:tablero})

  }
  cambiar(color,iPrincipio,jPrincipio,iFin,jFin,tablero){
    
    console.log(tablero);
    console.log(color);
    let aux=tablero;
    if(color!=="verde" && color!=="azul") return;
    
    
    if(color==="verde"){
      if((iFin-1===iPrincipio && jFin+1 ===jPrincipio)|| (iFin-1===iPrincipio && jFin-1 ===jPrincipio)){

        aux[iFin][jFin]="verde";
        aux[iPrincipio][jPrincipio]="";
        
      }else{
        return;
      }
     }else{
      if((iFin+1===iPrincipio && jFin+1 ===jPrincipio)|| (iFin+1===iPrincipio && jFin-1 ===jPrincipio)){

        aux[iFin][jFin]="azul";
        aux[iPrincipio][jPrincipio]="";
        
      }else{
        return;
      }
     }

     

  }

  render() {
    return (
      <div className="App">
        <Botonera tablero={this.state.matriz} mover={this.cambiar}/>
      </div>
    );
  }
}
export default App;
