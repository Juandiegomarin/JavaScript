// primero se importa el hook es {esto}
import React,{ useState,useEffect,createContext,useContext } from 'react';
// useEffect = cada vez que haya un cambio en la página llama a useEffect


// HOOK CON EL QUE SE CREA UNA ESPECIE DE ESTADO COMO SI  FUERA UNA APP PERO BETTER
/*
function App() {
  // creacion de un componente  (luego se llama como si fuera una variable entre {})
  // la variable se puede editar asi setContador(contador+1)
  const [contador,setContador]=useState(0);
  // componente con una funcion dentro
  const aumenta=()=>{setContador(contador+1)}

  return (
    <div className="App">
      <h1>Has hecho click {contador} veces</h1>
      <p>
        <button onClick={()=>setContador(contador+1)}>Click</button>
        Funciona sin usar la funcion aumenta
      </p>
      <p>
        <button onClick={()=>aumenta()}>Click</button>
        Usa la funcion aumenta
      </p>
    </div>
  );
}
export default App;
*/

// USA EL EL HOOK DE USEEFFECT
/*
function App() {
  const [contador,setContador]=useState(0);
  const [texto,setTexto]=useState("");

  // se ejecuta cada vez que se hace un cambio en la página
  // va a tomar como parámetro una funcion
  useEffect(
    ()=>{
      // cambia el title de la página usando el DOM virtual
      document.title = "Hemos hecho click " + contador+ " veces"
      // coge el title y lo pone en el de texto
      setTexto(document.title)
    }
  );

  return (
    <div className="App">
      <h1>Has hecho click {contador} veces</h1>
      <button onClick={()=>setContador(contador+1)}>Click</button>
      <p>{texto}</p>
    </div>
  );
}
export default App;
*/

// "ADELGAZAR LO QUE ESTA HECHO ARRIBA"
// createContext = permite usar una variable en toda la App pudiendo usarlo en otros componentes
const UsarUseContext = createContext();

function App() {
  const [texto,setTexto]=useState("Alboran");

  return (
    <div className="App">
      <UsarUseContext.Provider value={texto}>
        <h1>{`Estudio en el ` + texto }</h1>
        <Componente2 />
    </UsarUseContext.Provider>
    </div>
  );
}

// componente2 que coge el texto de la App como parámetro
const Componente2=()=>{
  return(
    <>
      <h2>Componente 2</h2>
      <Componente3/>
    </>
  )
}

// componente2 que coge el texto del componente2 como parámetro
const Componente3=()=>{
  return(
    <>
      <h2>Componente 3</h2>
      <Componente4/>
    </>
  )
}

// hacer componente 4 sin usar las props
const Componente4=()=>{
  // si quiero usar el texto tengo que usar el useContext (da igual el nombre de la variable)
  const texto2 = useContext(UsarUseContext);

  return(
    <>
      <h2>Componente 4</h2>
      <p>{`Sigo estudiando en ${texto2} :)`}</p>
    </>
  )
}

export default App;
