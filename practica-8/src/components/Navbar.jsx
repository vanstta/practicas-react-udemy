import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    //se accede a estos datos que vienen de chat provider
    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)

    return (
       <nav className="navbar navbar-dark bg-dark">
           <span className="navbar-brand">
                chat

           </span>
        <div>
            {
                usuario.estado ? (
                     <button 
                     className="btn btn-outline-danger my-2"
                     onClick={cerrarSesion}
                     >
                Cerrar Sesión
            </button>
                ) : (
                    <button 
                    className="btn btn-outline-success my-2"
                    onClick={ingresoUsuario} //paréntesis?
                    >
                Acceder
            </button>
                )
            }
            
           
        </div>
       </nav>
    )
}

export default Navbar
