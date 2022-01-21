import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {obtenerProductosAction} from '../actions/productosActions';

const Productos = () => {
  const dispatch = useDispatch()
  //useEffect para mandar a consultar la base de datos cuando el componente cargue
  useEffect( () => {
    //consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()
  }, [])

  const productos = useSelector (state => state.producto.productos)
  console.log(productos)

  return (
    <>
      <h2 className='text-center my-5'>Listado de productos</h2>
      <table className='table table-stripped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  )
};

export default Productos;
