import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {detallePokeAcccion} from '../redux/pokesDucks'

const Detalle = () => {

    const dispatch = useDispatch()

    React.useEffect (()=> {
        const fetchData = () => {
            dispatch(detallePokeAcccion())
        }
        fetchData()
    }, [dispatch])


    const pokemonCard = useSelector (store=> store.pokemones.unPokemon) 
   



    return pokemonCard ?  (
        <div className='card mt-5 text-center'>
           <div className="card-body">
               <img src={pokemonCard.foto} className='img-fluid' alt='pokemon'/>
               <div className="card-title">{pokemonCard.nombre}</div>
                   <p className="card-text">Alto: {pokemonCard.alto} | Peso: {pokemonCard.peso}</p>
               
           </div>
        </div>
    ) : null
}

export default Detalle
