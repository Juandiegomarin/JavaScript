export default function Buscador ({ handleChange }) {
    return (
      <form className="buscador" onSubmit={(e) => e.preventDefault()}>
        <h2>Buscador de pueblos</h2>
        <input name="busqueda" onChange={handleChange} placeholder="Busca tu pueblo..." defaultValue={''} />
      </form>
    )
  }