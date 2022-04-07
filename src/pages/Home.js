import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import {HiShoppingCart} from 'react-icons/hi';
import data from '../data/productos.json';
import cat from '../data/categorias.json';
import '../styles/Homes.css';
import img from '../images/ropa-vieja-empanadas.png';
import { Card } from '../components/Card';


export const Home = () => {

  const [cate, setCate] = useState(cat[0].cat)

  
    return ( 
      <>
      <main className='main'>
        <Navbar/>
        <header className='header-main'>
            <h6><HiShoppingCart/>Barrio el socorro  m-57 l-16 plan 282 </h6>
            <h1>CONGELADOS Y PASABOCAS <span>MANZUR</span></h1>
            <div className='grid-cont'>
              <div className='left-absolute'>
                <img src={img} id='img-empanadas' alt='Empanadas' />
              </div>
            </div>
            <button style={{margin:'40px 70px',color:'var(--white1)'}}><span>Nuestros Productos</span></button>
        </header>
      </main>
      <section className='grid-productos' id='gridproductos'>
        <h2>Nuestros Productos</h2>
        <div className='cat content-select'>Categoria: 
        <select onChange={(e)=>{setCate(e.target.value);}} value={cate}>
          {cat.map((e,i)=>(
            <option key={i+e} value={e.cat}>{e.cat}</option>
          ))}
          
        </select>
        </div>
        <div className='productos'>
              {
                data.map((e,i)=>(
                  e.image!==undefined && e.categoria===cate?<Card key={i+e.nombre+Date.now()} idClass={e.idClass} url={'/images/empanadas.png'} nombre={e.nombre} precio={e.valor} image={e.image} />
                  :null
                  ))
                }
          </div>
        </section>
      </>
    )
}