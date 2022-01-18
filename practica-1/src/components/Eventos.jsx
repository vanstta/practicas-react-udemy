import React, {useState} from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Hola soy un texto desde estado')

    const eventoClick = () => {
        console.log('Se hizo click')
        setTexto('Texto cambiado con setTexto')
    }


    return (
        <>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={ () => eventoClick () }>Click</button>

       </>
    )
}

export default Eventos
