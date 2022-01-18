import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const escudo = 'https://images.ole.com.ar/2020/12/05/LgjdCgljh_1256x620__2.jpg#1607198839645'

    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src={escudo} alt="" />
        </div>
    )
}

export default Variables
