import React, {useState} from 'react';
// a partir d eun array de objetos, se recorre y al tocar un botón cambiar las tareas
const Ejemplo2 = () => {

    const inicial = [
        {id:1, texto: 'soy la tarea inicial número 1'},
        {id:2, texto: 'soy la tarea inicial número 2'},
        {id:3, texto: 'soy la tarea inicial número 3'}
    ]

    const [lista, setLista] = useState(inicial)

    const cambiarTarea = () => {
        console.log('Click')
       setLista([
        {id:1, texto: 'soy la tarea inicial número 1 CAMBIADA'},
        {id:2, texto: 'soy la tarea inicial número 2 CAMBIADA'},
        {id:3, texto: 'soy la tarea inicial número 3 CAMBIADA'}
       ])
    }

    return (
        <div>
           <h2>Listas</h2>
           {
               lista.map(item=>(
                <h4 key= {item.id}>{item.texto}</h4>
               ))
           }
        <button onClick={()=> cambiarTarea()} className='btn btn-danger'>Cambiar tareas</button>
        </div>
    )
}

export default Ejemplo2
