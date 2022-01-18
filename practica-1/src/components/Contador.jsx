import React from 'react'



const Contador = () => {

    const [contador, setContador] = React.useState(0)

    // const aumentar = () => {
    //     console.log('Se llamó a contador')
    //     setContador(contador+1)
    // }

    return (
        <>
            <h3>Contador</h3>
            <p>Número aumentando: {contador}</p>
            <p>
                {
                    contador > 2 ? 'Es mayor a 2' : 'Es menor a 2'
                }
            </p>
            <button onClick={()=> setContador(contador+1)}>Aumentar</button>
        </>
    )
}

export default Contador
