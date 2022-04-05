import React from 'react'
import {Link} from 'react-router-dom'
import empanada from '../images/empanada.png'
const Navbar = props => {
  return (
    <nav>
      <img src={empanada} alt='empanada' />
        <ul>
            <li><Link to='#'>Inicio</Link></li>
            <li><Link to='#'>Productos</Link></li>
            <li><Link to='#'>Contactos</Link></li>
        </ul>
    </nav>
  )
}


export default Navbar