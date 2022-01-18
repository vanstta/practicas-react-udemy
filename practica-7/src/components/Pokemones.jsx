import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, detallePokeAcccion} from '../redux/pokesDucks'
import Detalle from './Detalle'

const Pokemones = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store=> store.pokemones.next)
    const previous = useSelector(store=> store.pokemones.previous)

    //se reemplaza array por results porque ahora se accede a toda la data que devuelve el objeto y no solo results
    // console.log(pokemones)

    return (
        <div className='row mt-5'>
            <div className="col-md-6">

            <h1>Lista de pokemones</h1>
            
            <ul className='list-group mt4'>
                {
                    pokemones.map((item, index)=> (
                        <li 
                        className='list-group-item'
                        key={index}>{item.name}
                        <button 
                        className='btn btn-secondary btn-sm '
                        onClick={()=>dispatch( detallePokeAcccion(item.url))}
                        >
                            Info
                        </button>
                        </li>
                    ))
                //se puede usar item.name de key porque en este caso es único. Yo lo cambié por index 
                }
            </ul>
           
{/* se indica que si la cantidad de pokemones es = 0, se muestra el botón  */}
            {
                pokemones.length === 0 &&   
                <button 
                onClick={()=> dispatch(obtenerPokemonesAccion())}
                className='btn btn-dark'
                >
                    Get Pokemones
                    </button>
            }
           
                <div className='d-flex justify-content-between'>

                {
                    next &&
                     <button 
                     onClick={() => dispatch(siguientePokemonAccion())}
                     className='btn btn-dark mt-4'
                     >Siguiente
                     </button>
                }
                {
                    previous &&
                    <button 
                    onClick={() => dispatch(anteriorPokemonAccion())}
                    className='btn btn-dark  mt-4'
                    >Anterior
                    </button>
                }
                    
                </div>
              
            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle/>
            </div>
            
        </div>
    )
}

export default Pokemones
