import React from 'react';
import {nanoid} from 'nanoid'
function App() {


 const [tarea, setTarea] = React.useState('')
 const [tareas, setTareas] = React.useState([])
 const  [modoEdición, setModoEdición] = React.useState(false)
 const [id, setId] = React.useState('')
 const [error, setError] = React.useState(null)

 const agregarTarea = e => {
  e.preventDefault()

  if (!tarea.trim()) {
    console.log('Elemento vacío')
    setError('Escriba algo por favor...')
    return
  }  
  console.log(tarea)
  setTareas([
    ...tareas, 
    {id: nanoid(10), nombreTarea:tarea}

  ])
  setTarea('')
  setError(null)
 }

 const eliminarTarea = id => {

  const arrayFiltrado = tareas.filter(item=> item.id !== id)
  setTareas(arrayFiltrado)
   console.log(id)
 }

  const editar = item => {
    
    setModoEdición(true)
    setTarea(item.nombreTarea)
    console.log(item)
    setId(item.id)

  }

  const editarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      setError('Escriba algo por favor...')
      return
    }

    const arrayEditado = tareas.map (
      item => item.id === id ? {id, nombreTarea:tarea} : item) 

      setTareas(arrayEditado)
      setModoEdición(false)
      setTarea('')
      setId('')
      setError(null)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
         <h4 className="text-center"> Lista de tareas</h4>
         <ul className="list-group">

          {

            tareas.length === 0 ? (
               <li className="list-group-item">No hay tareas</li>
            ) : (
              tareas.map(item=> (

                <li className="list-group-item" key={(item.id)}>
                <span className="lead">{item.nombreTarea}</span>
  
                <button className="btn btn-danger btn-sm  mx-2" onClick={()=> eliminarTarea(item.id)}>
                  Eliminar
                  </button>
  
                <button 
                className="btn btn-warning btn-sm "
                onClick={()=> editar(item)}
                >
                  Editar
                  </button>
              </li>
              ))
            )

           
          }

          
         </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center"> { 
        modoEdición ? 'Editar tarea' : 'Agregar tarea'
        } </h4>
        <form onSubmit={modoEdición ? editarTarea : agregarTarea}>
          {
            error? <span className='text-danger'>{error}</span> : null
          }
          <input 
          type="text" 
          className="form-control mb-2"
          placeholder='Ingrese tarea'
          onChange={e => setTarea(e.target.value)}
          value={tarea}
          />
          {
            modoEdición ? (
              <button className='btn btn-warning w-100' type='submit'>Editar</button>
            ) : (
               <button className='btn btn-dark w-100' type='submit'>Agregar</button>
            )
          }
         
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
