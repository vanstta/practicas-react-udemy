import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion]= React.useState('')
    const [listaF, setListaF] =  React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
    
        if (!fruta.trim()) {
            console.log('Está vacío Fruta')
            return
        }
        if (!descripcion.trim()) {
            console.log('Está vacío Descripcion')
            return
        }
        console.log('Procesando data ' + fruta + ' ' + descripcion)
        setListaF([
            ...listaF,
            {nombreFruta: fruta, 
            nombreDescripcion: descripcion}
        ])
        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    // const ListaFrutas = () => {
    //     const listaInicial =[]

      
    //     const agregarFruta = () => {
       
    //         setListaF([
    //             ...listaF,
    //             {fruta, descripcion}
    //         ])
    //     }


    // }

    return (
        <div className='container mt-5'>
            <h2 >Formulario</h2>

            <form onSubmit={guardarDatos}>
                <input type="text" 
                placeholder='Ingrese fruta'
                className='form-control mb-2'
                onChange={e => setFruta(e.target.value)}
                />
                <input type="text" 
                placeholder='Ingrese descripción'
                className='form-control mb-2'
                onChange={e => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
            </form>
            <ul className='listaFrutas'> 
                {
                    listaF.map((item, index)=>(
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
