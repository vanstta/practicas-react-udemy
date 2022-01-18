import React from 'react';
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {auth} from './firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)
//esto lee la información del ususario logueado

React.useEffect(() => {
  const fetchUser= () => {

       auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
  }
 fetchUser()
}, [])

//si la funcion ruta privada lee el local storage y no existe el usuario, redirige al login.
//se reemplaza en todas las rutas que sean privadas, en este caso el inicio.
const RutaPrivada = ({component, path, ...rest}) => {
  if (localStorage.getItem('usuario')) {
    const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
    if (usuarioStorage.uid===firebaseUser.uid) {
     return <Route component={component} path={path} {...rest}/>
    }else {
      return <Redirect to='/login' {...rest}/>
    }
  }else {
    return <Redirect to='/login' {...rest}/>
  }
}



//se pinta el navbar una vez que se obtiene el usuario o el null
 
  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar/>
        <Switch>
          <RutaPrivada component={Pokemones} path='/' exact/>
          <Route component={Login} path='/login' exact/>
          
        </Switch>
      </div>
    </Router>
  ) : (<div>Cargando...</div>)
}

export default App;
