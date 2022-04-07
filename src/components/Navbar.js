import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import empanada from '../images/empanada.png'
const Navbar = props => {
  return (
    <nav className='nav-menu'>
      <img src={empanada} alt='empanada' />
        <ul>
            <li><Link to='#'>Inicio</Link></li>
            <li><Link to='#'>Productos</Link></li>
            <li><Link to='#'>Contactos</Link></li>
        </ul>
        <div className='what'>
        <AiOutlineWhatsApp color='white' />
        </div>
    </nav>
  )
}


export default Navbar