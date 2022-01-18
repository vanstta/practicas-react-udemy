
import React from 'react'
import { withRouter } from 'react-router-dom'
import {auth, db} from '../firebase'



const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
           
            setError('ingrese mail')
            return
        }

        e.preventDefault()
        if (!pass.trim()) {
           
            setError('ingrese su contraseña')
            return
        }
        if (pass.length<6) {
           
            setError('Password demasiado corta. Mínimo 6 caracteres')
            return
        }
        
        setError(null)
        console.log('pasando todas las validaciones')

        if(esRegistro) {
            registrarUser()
           
        }else {
            login()
        }

    }


    const login = React.useCallback(async()=>{
        try {
            
            const resp = await auth.signInWithEmailAndPassword(email, pass)
            console.log(resp.user)
            setEmail('')
            setPass('')
            props.history.push('/admin')

        } catch (error) {
            console.log(error)
            if (error.code ==='auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code ==='auth/user-not-found') {
                setError('Email no registrado')
            }
            if (error.code ==='auth/wrong-password') {
                setError('Contraseña incorrecta')
            }
            
        }
    }, [email, pass, props.history])
    const registrarUser = React.useCallback ( async()=> {
        
        try {
            const resp = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(resp.user)
            await db.collection('usuarios').doc(resp.user.email).set({
                email: resp.user.email,
                uid: resp.user.uid
            })
            await db.collection(resp.user.uid).add({
                name: 'tarea de ejemplo', 
                fecha: Date.now()
            })
            setEmail('')
            setPass('')
            props.history.push('/admin')
          
        } catch (error) {
            if (error.code ==='auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code ==='auth/email-already-in-use') {
                setError('Email ya registrado')
                setEsRegistro(false)
                
            }
            setEmail('')
            setPass('')
        }

    }, [email, pass, props.history])


    return (
        <div className='mt-5'>
            <h3 className='text-center'>{
                esRegistro ? 'Registro de usuarios' : 'Login de acceso'
            }</h3>
            <hr />
       
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
               
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className='alert alert-danger'> 
                                    {error}
                                </div>
                            )
                        }
                        <input 
                        type="email" 
                        className='form-control mb-2'
                        placeholder='Ingrese un email'
                        onChange={e=> setEmail(e.target.value)}
                        value={email}
                        />
                         <input 
                        type="password" 
                        className='form-control mb-2'
                        placeholder='Ingrese un password'
                        onChange={e=> setPass(e.target.value)}
                        value={pass}
                        
                        />
                        <button className="btn btn-dark btn-lg w-100 mb-2" type='submit'>
                            {
                                esRegistro ? 'Registrarse' : 'Acceder'
                            }
                        </button>
                        <button 
                        onClick={() => setEsRegistro (!esRegistro)}
                        className="btn btn-info btn-sm w-100  "
                        type='button'>
                        {
                            esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'
                        }
                        </button>
                    </form>

                </div>
            </div>  
        </div>
    )
}

export default withRouter(Login)
