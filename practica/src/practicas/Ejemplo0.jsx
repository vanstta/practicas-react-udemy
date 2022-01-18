import React, {useState} from 'react';

const Ejemplo0 = () => {
    const [saludo, setSaludo] = useState('Hola, estoy usando use state')

    const funcionClick = () => {
      console.log('Click')
      setSaludo('Cambié el estado :D')
    }
    
    
    
      return (
        <div className="container mt-5">
          <h1>{saludo}</h1>
          <button onClick={()=> funcionClick()} className='btn btn-dark mt-3'>Cambiar Texto</button>
         
        </div>
    )
}

export default Ejemplo0
