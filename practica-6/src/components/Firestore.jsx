import React from "react";
import {db} from '../firebase'

const Firestore =(props)=> {

  const [tareas, setTareas] = React.useState([])
  const [tarea, setTarea] = React.useState('')
  const [edicion, setEdicion] = React.useState(false)
  const [id, setId] = React.useState('')


  React.useEffect(()=> {

    const obtenerDatos = async () => {

      try {
        
      
        const data = await db.collection(props.user.uid).get()
        
        const arrayData =  data.docs.map(doc=>({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setTareas(arrayData)



      } catch (error) {
        console.log(error)
      }

    }

    obtenerDatos()

  },[])


const agregar = async (e) => {
  e.preventDefault()


  if (!tarea.trim()) {
    console.log('Está vacío')
    return
  }

  console.log(tarea)

try {
  
  
  const nuevaTarea= {
    name: tarea,
    fecha: Date.now()
  }

const data = await db.collection(props.user.uid).add(nuevaTarea)
setTareas([
  ...tareas, 
  {...nuevaTarea, id: data.id}
])
setTarea('')

} catch (error) {
  
}
}

const eliminar = async(id) => {
  try {
    

    await db.collection(props.user.uid).doc(id).delete()

    const arrayFiltrado = tareas.filter(item=> item.id!== id)
    setTareas(arrayFiltrado)
  } catch (error) {
    console.log(error)
  }
}

const activarEdicion = (item) => {
    setEdicion(true)
    setTarea(item.name)
    setId(item.id)
 
}

const editar = async(e) => {
  e.preventDefault()
  if (!tarea.trim()){
    console.log('vacio')
    return
  }
  try { 
   
    await db.collection(props.user.uid).doc(id).update({
      name: tarea
    })

    const arrayEditado = tareas.map(item=>(
      item.id === id ? {id: item.id, fecha: item.fecha, name: tarea}: item
    ))
    
    setTareas(arrayEditado)
    setEdicion(false)
    setTarea('')
    setId('')



  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-6">
          <ul className="list-group">
            {
              tareas.map(item=> (
                <li className="list-group-item" key={item.id}>
                  {item.name}
                  <button 
                  className="btn btn-danger btn-sm"
                  onClick={()=> eliminar(item.id)}
                  
                  >
                    Eliminar
                  </button>
                  <button 
                  className="btn btn-warning btn-sm "
                  onClick={()=> activarEdicion(item)}
                  >
                    Editar
                  </button>
                </li>
              ))
            }
          </ul>
      </div>
      <div className="col-md-6">
         
          <form onSubmit={edicion? editar : agregar} >
            <input 
            type="text" 
            placeholder="Ingrese tarea"
            className="form-control mb-2"
            onChange={e => setTarea(e.target.value)}
            value={tarea}
            />
            <button className={edicion ? 'btn btn-warning w-100' : 'btn btn-dark w-100'} type="submit">
            {
             edicion ? 'Editar tarea' : 'Agregar tarea'
           }
            </button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default Firestore;
