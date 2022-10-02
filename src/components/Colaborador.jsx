import React, {useState} from 'react'

const Colaborador = ({colaboradores, setColaboradores}) => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const handleOnChangeNombre = (event)=> setNombre(event.target.value)
    const handleOnChangeEmail = (event)=> setCorreo(event.target.value)
    const pickOnSubmit = (event) => {
      event.preventDefault();
      const nuevosColaboradores = {
          id: Date.now(),
          nombre: nombre,
          correo: correo
      }
      setColaboradores([...colaboradores, nuevosColaboradores]);
      setNombre('');
      setCorreo('');
  };
  return (
    <form className='subcontainer' onSubmit={pickOnSubmit}>
        <div>
            <label htmlFor='nombre'></label>
            <input className="nombre" name='nombre' type= "text" placeholder='Nombre del colaborador'
            onChange={handleOnChangeNombre}></input>
        </div>
        <div>
            <label htmlFor='correo'></label>
            <input className="correo" name='correo' typer="text" placeholder='Correo del colaborador'
            onChange={handleOnChangeEmail}></input>
        </div>
        <button type='submit'>Añadir</button>
    </form>
  )
}

export default Colaborador