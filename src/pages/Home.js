import React from 'react'
import Navbar from '../components/Navbar';
import {HiShoppingCart} from 'react-icons/hi'
import '../styles/Homes.css';
import img from '../images/ropa-vieja-empanadas.png';
export const Home = () => {
    return ( 
      <main>
        <Navbar/>
        <header className='header-main'>
            <h6><HiShoppingCart/>Barrio el socorro  m-57 l-16 plan 282 </h6>
            <h1>CONGELADOS Y PASABOCAS <span>MANZUR</span></h1>
            <div className='grid-cont'>
              <div class='left-absolute'>
                <img src={img} id='img-empanadas' alt='Empanadas' />
              </div>
            </div>
            <button style={{margin:'40px 70px'}}><span>Nuestros Productos</span></button>
        </header>
      </main>
    )
}