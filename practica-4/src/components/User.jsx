import React from 'react'
import { useParams } from 'react-router-dom'
// /cjs/react-router-dom.min
const User = () => {


    
    const {id} = useParams()
    
    const [pueblo, setPueblo] = React.useState([])

    React.useEffect(()=> {
        obtenerDatos()
         
    }, [])

    const obtenerDatos = async () => {
         const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
         const users = await data.json()
         setPueblo(users)
    }

    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.expansion}</p>
        </div>
    )
}

export default User
