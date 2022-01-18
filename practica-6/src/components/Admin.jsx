import React from 'react'
import { withRouter } from 'react-router-dom'
import {auth, db} from '../firebase'
import Firestore from './Firestore'


const Admin = (props) => {

    const [user, setUser] = React.useState(null)


    React.useEffect(()=> {
        if (auth.currentUser){
            console.log('Existe usuario')
            setUser(auth.currentUser)
        }else {
            console.log('No existe usuario')
            props.history.push('/Login')
        }
    },[ props.history])

    return (
        <div>
            <h2>Ruta protegida</h2>
            {
                user && (
                   <Firestore user={user}/>
                )
            }
        </div>
    )
}

export default withRouter(Admin)
