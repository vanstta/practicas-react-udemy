import Header from './components/Header';
import React from 'react';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import generateStore from './store';

function App() {
  const store = generateStore()
  return (
    <Router>
     <Provider store={store}>
        <Header/>
        <div className='container mt-5'>
          <Routes>
            <Route element={<Productos/>}path='/' exact></Route>
            <Route path='/productos/nuevo' element={<NuevoProducto/>}></Route>
            <Route path='/productos/editar/:id' element={<EditarProducto/>}></Route> 
            
          </Routes>
        </div>
      </Provider>  
    </Router>
  );
}

export default App;
