import React from 'react'
import Agregar from './Agregar'
import { ChatContext } from '../context/ChatProvider'

const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect (()=> {
        console.log(refZonaChat)
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])

    return (
        <div 
        className='mt-5 px-2 chat'
        ref={refZonaChat}
        >
            {
                mensajes.map((item, index)=> (
                    usuario.uid === item.uid ? (
                         <div className='d-flex justify-content-end mb-2' key={index}>
                <span className='badge badge-pill badge-primary'>
                    {item.texto}
                </span>
            </div>
                    ) : (
                           <div className='d-flex justify-content-start mb-2'key={index}>
            <span className='badge badge-pill badge-secondary'>
                   {item.texto}
                </span>
            </div>
                    )
                ))
            }
           
         
            <Agregar/>
        </div>
        
    )
}

export default Chat
