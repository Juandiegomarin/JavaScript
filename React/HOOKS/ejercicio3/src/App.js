import React, { useState } from 'react';
import './App.css';


// Componente Deseo
// devuelve un input para escribir los deseos
function Deseo (){
  return(
    <form>
      <input type='text' placeholder='Escribe tu deseo' name='deseo'/>
      <button type="submit">Agregar</button>
    </form>
  );
}

// Componente lista de deseos
// devuelve una ul
function ListaDeseos(parametro){
  return(
    <ul>
      {parametro.deseos.map(des=>{
        return (
          <li>
            {des}
          </li>
        )
      })}
    </ul>
  );
}



function App (){

  // Hooks con un array que guarda los deseos
  const[deseos,setDeseos]=useState(["Iphone","Reloj"]);


  return(
    <div className='App'>
      <h2>Lista de deseos</h2>
        {/* Le paso a la lista los deseos */}
      <ListaDeseos deseos={deseos}/>
      <p>Añade tu regalo fav</p>
      <Deseo/>
    </div>
  );
}

export default App;