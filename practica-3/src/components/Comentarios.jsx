import React from 'react'

const Comentarios = (props) => {
    return (
        <div className='media'>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                <img src={props.urlImagen} alt="img random"/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5 className='mt-0'>{props.persona}</h5>
                {props.texto}
                </div>
            </div>
        </div>
    )
}

export default Comentarios
