import React from 'react'

const Saludo = (props) => {
    console.log(props)
    return (
        <div className=''> 
            <h1>Saludando a {props.persona}</h1>
            <p>Edad: {props.edad}</p>
        </div>
    )
}

export default Saludo
