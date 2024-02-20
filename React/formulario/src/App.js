
import './archivos/style.css';
import todasPreguntas from "./archivos/preguntas.json";
import todosFototipos from "./archivos/fototipos.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useState,useEffect } from 'react';
import axios from "axios";
import Grafica from './archivos/Grafica';
function Muestra(props) {

  return (
    props.lista.map((e, indice) => {
      if (props.filtradas[indice]) {
      } else {
        return (<div className='div'>
          <h1>{e.pregunta}</h1>
          {e.respuestas.map(r =>

            <Button value={r.valor} className="boton" color='outline' onClick={() => props.click(r.respuesta, r.valor, indice)}>{r.respuesta}</Button>

          )}
        </div>)

      }
    }
    )
  );
}

function App() {
  const preguntas = todasPreguntas.preguntas

  const [listaPreguntas, setListaPreguntas] = useState(preguntas.slice());
  const [total, setTotal] = useState(0);
  const [seleccionadas] = useState(new Array(preguntas.length));
  const [filtro, setFiltro] = useState(new Array(preguntas.length).fill(false))
  


  const MuestraFotoTipo = () => {
    const [data, setData] = useState("");

    let t
    if (total <= 7) {
      t = 1
    } else if (total >= 8 && total <= 21) {
      t = 2
    } else if (total >= 22 && total <= 42) {
      t = 3
    } else if (total >= 43 && total <= 68) {
      t = 4
    } else if (total >= 69 && total <= 84) {
      t = 5
    } else {
      t = 6
    }

    

    useEffect(() => {
      // Función para realizar la solicitud GET
      const fetchData = async () => {
        // https://thematic-learning.com/2DAW2024/JUANDIEGO/votaciones.php?voto=
        try {
          const response = await axios.post('http://localhost/Proyectos/FOTOTIPO/votaciones.php?voto=' + t);
          setData(response.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Llamada a la función para realizar la solicitud cuando el componente se monta
      fetchData();
    },[]);
    
    let ruta = "../JUANDIEGO/img/tipo" + t + ".png";
    return (
      todosFototipos.fototipos.map(e => {
        if (e.tipo == t) {
          return (
          <>
          <div className='divFototipo'>
            <div>
              <h1>Tus caracteristicas pertenecen al fototipo Nº{t}</h1>
              <h2>Propiedades</h2>
              <p><strong>Descripcion:</strong> {e.descripcion}</p>
              <p><strong>Color de piel:</strong>{e.caracteristicas.colorPiel}</p>
              <p><strong>Color de pelo: </strong>{e.caracteristicas.colorCabello}</p>
              <p><strong>Color de ojos: </strong>{e.caracteristicas.colorOjos}</p>
              <p><strong>Bronceado:</strong> {e.caracteristicas.bronceado}</p>
            </div>
            <div> <img src={ruta} /></div>
          </div>
          <Grafica datos={data}/>
          </>)
        }
      }))

  }
  const guardaRespuesta = (texto, valor, indice) => {

    let respuesta = {
      texto: texto,
      valor: valor
    }

    seleccionadas.push(respuesta);


    // let copiaFiltro = filtro.slice();
    //copiaFiltro[indice] = true;

    let copiaPreguntas = listaPreguntas.slice();

    copiaPreguntas = copiaPreguntas.filter((e, index) => index !== indice)
    setListaPreguntas(copiaPreguntas);

    let copiaTotal = total;
    copiaTotal += valor;
    setTotal(copiaTotal);
    //setFiltro(copiaFiltro)
  }

 

  const reload = () => {
    window.location.reload(true);
}


  return (
    <div className="App">
      <Muestra lista={listaPreguntas} filtradas={filtro} click={guardaRespuesta} />

      {listaPreguntas.length == 0 && <MuestraFotoTipo/> }
      <Button onClick={()=>reload()}>Volver a Iniciar</Button>

    </div>
  );
}

export default App;
