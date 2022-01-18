import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {cerrarSesionAccion} from '../redux/ususarioDucks'
import { withRouter } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const Navbar = (props) => {

    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }
//esto se usa para saber si hay un usuario activo y decidir que botones mostrar
    const activo = useSelector(store=>store.usuario.activo)

    return (
        <div className='navbar navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>APP POKE</Link>
            <div className='d-flex'>
                {
                    activo ? (
                        //se usa fragment porque solo admite un elemento padre
                    <>
                         <NavLink className='btn btn-dark mr-2' to='/' exact>Inicio</NavLink>
                        
                <button 
                className='btn btn-dark mr-2'
                onClick={()=> cerrarSesion() }
                
                >
                    Cerrar Sesión
                    </button>
                    </>)
                 : (
                    <NavLink className='btn btn-dark mr-2' to='/login' exact>Login</NavLink>
                )
               }
                
            </div>
        </div>
    )
}

export default withRouter (Navbar)
