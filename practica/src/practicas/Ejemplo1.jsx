import React, {useState} from 'react'; 
//contador
function Ejemplo1 (){

const [contar, setContar] = useState(0)

const aumentar = () => {
    console.log('click')
    setContar(contar+1)
    
}



return (
    <div>
       <h3>{contar}</h3>
       <p>
           {
           contar<5 ? 'El número es menor a 5'
           : contar === 5? 'El número es 5'
           : 'El número es mayor a 5'
           }
           </p>
    <button onClick={() => aumentar()} className='btn btn-dark'>Contador</button>

    </div>
)

}

export default Ejemplo1