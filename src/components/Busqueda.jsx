import React from 'react'

const Busqueda = ({setBuscar}) => {
    const handleOnChangeBuscar = (event) => {
        setBuscar(event.target.value);
    }   
  return (
    <nav >
        <span>Buscar colaboradores</span>
        <input className='bar' type="text" 
               placeholder='Busca un colaborador' 
               onChange={handleOnChangeBuscar}
        />
    
    </nav>
  )
}

export default Busqueda