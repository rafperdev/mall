import React, { Fragment, useState } from 'react';
import './App.css';
import Productos from './Productos';

//JSX
export default function App() {
  const productos = [
    {
      "nombre": "Raspberry Pi 3",
      "desc": "Kit Raspberry Pi 3. Incluye cargador, memoria",
      "precio": "$ 50"
    },
    {
      "nombre": "Televisor 50 pulgadas",
      "desc": "Televisor smart tv",
      "precio": "$ 1000"
    },
    {
      "nombre": "Celular Xiaomi",
      "desc": "Cámara 50MP. 128GB memoria.",
      "precio": "$ 700"
    },
    {
      "nombre": "Celular Samsung",
      "desc": "Cámara 70MP. 250GB memoria.",
      "precio": "$ 950"
    }
  ];
  //Estado: Lugar donde guardamos datos y posee una función para modificar esos datos
  const [listaProducto,setListaProducto] = useState(productos);

  const buscaProducto = (event)=>{
    setListaProducto(
      productos.filter(p => p.nombre.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  return (
    <Fragment>
      <input type="text" placeholder="Buscar producto..." onChange={buscaProducto}/>

      {listaProducto.map(p => 
      <Productos 
      nombre={p.nombre} 
      desc={p.desc}
      precio={p.precio}
      /> )}


    </Fragment>
  )
}
