import React from 'react'

export const Nuevocolaborador = ({colaboradores}) => {
  return (
    <div>
        <ul>
      {colaboradores.map(colaborador => 
            <li key={colaborador.id.toString}>{colaborador.nombre} - {colaborador.correo}</li>)}
        </ul>
    </div>
  )
}
