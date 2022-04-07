import React from 'react'
import './styles/Card.css'
export const Card = ({image,nombre,precio,idClass}) => {
  return (
    <div className={`card card${idClass}`}>
            <div className='card-img'>
            <img src={image} alt={nombre}/>
            </div>
            <div className='card-body'>
                <h3>{nombre}</h3>
                <button style={{marginTop:20}}><span>Valor: <strong>${precio}</strong></span></button>
            </div>
    </div>
  )
}
