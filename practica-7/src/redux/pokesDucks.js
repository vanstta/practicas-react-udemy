import axios from "axios"


//constantes

const dataInicial = {

    count: 0,
    next: null,
    previous: null,
    results: [] 
}


//type
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'


//reducers

export default function pokesReducer (state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO: 
        return {...state, ...action.payload}
        //con ... se accede a todas las propiedades del objeto. Ya no está el array
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
        return {...state, unPokemon: action.payload }
           
        default:
            return state
    }
//en SIGUIENTE_POKEMONES_EXITO se accede a action.payload y a las dos propiedades que tiene dentro (array: la data que devuelve axios, offset: configurado en offset +20 que es para el paginado)
}
 
//acciones


export const detallePokeAcccion = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) => {

    if(localStorage.getItem(url)){
        
        dispatch({
            type: POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        console.log('desde local detalle')
        return
    }

    try {
        console.log('desde api detalle')
        const res = await axios.get(url)
        // console.log(res.data)
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                peso: res.data.weight,
                alto: res.data.height,
                foto: res.data.sprites.front_default
            }
        })
        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            peso: res.data.weight,
            alto: res.data.height,
            foto: res.data.sprites.front_default
        }))
    } catch (error) {
        
    }
}

export const obtenerPokemonesAccion = () => async(dispatch) => {
    if (localStorage.getItem('offset=0')){
        console.log('soy local storage')
        dispatch ({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse( localStorage.getItem('offset=0'))
        })
        return
    }
    // getState recibe el state (dataInicial). Lee la tienda, en la que está pokemones. Y devuelve el objeto pokemones. Para acceder a lo que está dentro de dataInicial, se debe poner.pokemones
    //Para obtener el offset se agrega .offset o con {offset}. 
    // en mejoras se quita el offset y se llama a toda la data, no solo results


     try {
        const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
        `)
        console.log('soy api')
        dispatch ({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))
//data viene de axios. En el objeto results están los objetos a loe que se quiere acceder
     } catch (error) {
         console.log(error)
     }
}

//se reemplaza el uso de offset y siguiente por NEXT
export const siguientePokemonAccion =() => async(dispatch, getState) => {
 
    const {next} = getState().pokemones

    
    if (localStorage.getItem(next)){
        console.log('soy local storage next')
        dispatch ({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse( localStorage.getItem(next))
        })
        return
    }
   

 try {
     const res = await axios.get(next)

     dispatch ({
         type:  SIGUIENTE_POKEMONES_EXITO,
         payload: res.data
         //se quita el objeto con array y offset y se devuelve res.data
     })
     localStorage.setItem(next, JSON.stringify(res.data))
 } catch (error) {
     console.log(error)
 }
}

export const anteriorPokemonAccion = () => async(dispatch, getState) => {
    const {previous} = getState().pokemones

    if (localStorage.getItem(previous)){
        console.log('soy local storage previous')
        dispatch ({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse( localStorage.getItem(previous))
        })
        return
    }


  try {
    const res = await axios.get(previous)
    dispatch ({
        type: SIGUIENTE_POKEMONES_EXITO,
        payload: res.data
    })
    localStorage.setItem(previous, JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }

}