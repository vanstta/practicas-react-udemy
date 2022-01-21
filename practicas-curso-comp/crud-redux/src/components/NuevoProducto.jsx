import React, {useState} from 'react';
import { crearProductoAction } from '../actions/productosActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const NuevoProducto = () => {
  //history no funcionaba/ pruebo con useNavigate. Se importa y se usa como dispatch
  //state del componente 
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)

  //utilizar useDispatch para devolver una funcion
  const dispatch = useDispatch()
  const history = useNavigate();
  //acceder al state del store
  const cargando = useSelector(state => state.producto.loading)
  //el 'producto' es el del store, que sale del productosReducers
  
  const error = useSelector(state=>state.producto.error)
 
  //manda a llamar el action de productosAction
  //como solo se pasa el producto que viene del objeto de agregarProducto, se puede eliminar el () de la arrow function y dejar un solo parametro. Ese mismo recibe dispatch
  const agregarProducto = producto => dispatch (crearProductoAction(producto))

  //cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault();
    //validar formulario
    if (nombre.trim() === '' || precio <= 0) {
      console.log('Ingresar un valor')
      return;
    }
  //Si no hay errores

  //crear el nuevo producto
  agregarProducto({
    nombre, 
    precio
  })
  //redireccionar no funciona
  history('/')
}



  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar nuevo producto
            </h2>
            <form
              onSubmit={submitNuevoProducto}
            >
              <div className='form-group'>
                <label>Nombre Producto</label>
                <input 
                  type="text" 
                  className='form-control'
                  placeholder='Nombre Producto' 
                  name='nombre'
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Nombre Producto</label>
                <input 
                  type="number" 
                  className='form-control'
                  placeholder='Precio Producto' 
                  name='precio'
                  value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                >Agregar
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className='alert alert-danger p2 mt-4'>Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
