import React from 'react'
import Navbar from '../components/Navbar';
import {HiShoppingCart} from 'react-icons/hi'
import '../styles/Homes.css';
export const Home = () => {
    return ( 
      <main>
        <Navbar/>
        <header>
            <h6><HiShoppingCart/>Barrio el socorro  m-57 l-16 plan 282 </h6>
        </header>
      </main>
    )
}