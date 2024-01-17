
import './App.css'
import { useState } from 'react'
import Buscador from './Componentes/Buscador'
function App() {
  const [pueblos] = useState([
    'Estepona', 'Sabinillas', 'San pedro', 'Cancelada', 'Ojen', 'Malaga', 'Marbella', 'Fuengirola', 'Los Barrios', 'Mijas', 'Fuenlabrada', 'Motril'
  ])
  const [busqueda, setBusqueda] = useState('')

  // Establezco la busqueda cada vez que se cambia el buscador
  function handleChange(event) {
    const busqueda = event.target.value
    setBusqueda(busqueda)
  }

  // Filtro los pueblos
  let filtrados = pueblos.filter((p) => busqueda !== '' && p.toLowerCase().startsWith(busqueda.toLowerCase()))
  if (filtrados.length > 1) filtrados = filtrados.reduce((p1, p2) => `${p1} - ${p2}`)

  return (
    <div className="App">
      <Buscador handleChange={handleChange} />
      {busqueda !== '' && <div className="resultado">
        <h3>Resultados</h3>
        {filtrados}
      </div>}
    </div>
  )
}
export default App;
