
import './archivos/style.css';
import todasPreguntas from "./archivos/preguntas.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useState } from 'react';
function Muestra(props) {

  return (
    props.lista.map(e =>
      <div className='div'>
        <h1>{e.pregunta}</h1>
        {e.respuestas.map(r =>

          <Button value={r.valor} className="boton" color='outline' onClick={()=>props.click(r.respuesta, r.valor)}>{r.respuesta}</Button>
        )}
      </div>
    )
  );
}

function App() {
  const preguntas = todasPreguntas.preguntas;

  const [seleccionadas, setSeleccionadas] = useState([{ texto: "Hola", valor: 1 }]);
  const MuestraRespuestas = () => {

    return (
      <>
        <ul>
          {seleccionadas.map(r => <li>{r.texto}</li>
          )}
        </ul>
      </>
    );
  }
  const guardaRespuesta = (texto, valor) => {

    let respuesta = {
      texto: texto,
      valor: valor
    }
    console.log(respuesta);
    let copia = seleccionadas;
    copia.push(respuesta)
    setSeleccionadas(copia)
  }




  return (
    <div className="App">
      <Muestra lista={preguntas} respuestas={seleccionadas} click={guardaRespuesta} />
      <MuestraRespuestas />
    </div>
  );
}

export default App;
