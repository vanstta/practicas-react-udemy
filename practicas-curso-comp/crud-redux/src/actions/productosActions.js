import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import Productos from '../components/Productos'


//ver con Kari--> producto?
export function crearProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())
        try {
            //insertar en la api
            await clienteAxios.post('/productos', producto)
            //si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))
            //alerta exito
            Swal.fire(
                'Correto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {   
            //si hay un error cambiar el state
            //si hay error no cae en el catch y no muestra el error
            //lo solucioné agregano 'error: true' en el A-P-E del switch
            dispatch(agregarProductoError(true))
            //alerta error
            Swal.fire(
               { icon: 'error',
                title: 'Hubo un error',
                text: 'Intenta de nuevo'}
            )
        }
    }
}

const agregarProducto = () => ({
    //en caso que tarde aparece un loading, que es el payload true. Inicia en false en el estado inicial
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
    //estado??
})

// funcion para descargar productros de la base de datos

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(descargaProductosExitosa(respuesta.data))
            //el respuesta.data trae el arreglo de objetos de la api
        } catch (error) {
            console.log(error)
            dispatch(descargaProductosError())
        }
    }
    
}

// cuando inicia la descarga de los Productos, cargando será true
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
    //por qué??
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})