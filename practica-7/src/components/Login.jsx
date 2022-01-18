import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ingresoUsuarioAccion } from '../redux/ususarioDucks'
import {withRouter} from 'react-router-dom'


const Login = (props) => {

    const dispatch = useDispatch()
    const loading = useSelector(store=>store.usuario.loading)
    const activo = useSelector(store=>store.usuario.activo)



//el effect sirve para hacer el seguimiento de algun dato

    React.useEffect(()=> {
        console.log(activo)
        if (activo) {
            props.history.push('/')
        }
    }, [activo])

    return (
        <div className='mt-5 text-center' >
            <h3>Acceder con Goolge</h3>
           <hr />
           <button 
           className="btn btn-dark"
           onClick={()=> dispatch(ingresoUsuarioAccion())}
           disabled={loading}
           >
               Acceder
               </button>
        </div>
    )
}

export default withRouter (Login)
