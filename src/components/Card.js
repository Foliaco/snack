import React from 'react'
import './styles/Card.css'
export const Card = ({url,nombre,precio}) => {
  return (
    <div className='card '>
            <div className='card-img'>
            <img src={url} alt={nombre}/>
            </div>
            <div className='card-body'>
                <h3>{nombre}</h3>
                <p>Valor: <strong>${precio}</strong></p>
            </div>
    </div>
  )
}
