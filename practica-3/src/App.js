import React from "react";
import Comentarios from "./components/Comentarios";
import Saludo from "./components/Saludo";


function App() {
  return (
    <div className="containter mt-5">
     <h1>Proyecto desde cero</h1>
     <Saludo persona='Ignacio' edad={30}/>
     {/* <Saludo persona='Juanito' edad={25}/>
     <Saludo persona='Pedrito' edad={40}/> */}
     <hr/>
     <h3>Cajita de comentarios</h3>
     <Comentarios
      urlImagen=' https://i.picsum.photos/id/160/64/64.jpg?hmac=I7uF7mCb2VgwPqY6HpGIMd0RzFehgmvd8tUnbZXCMO0'
      persona='Sol'
      texto= 'lorem ipsum lorem at met '
     />
     <Comentarios
     urlImagen='https://i.picsum.photos/id/648/64/64.jpg?hmac=fd02TzjoXcn71JasPc9gU2qatFCOAlivX1dINHANBc8
     '
     persona='Kevin'
     texto= 'component. You can replace this wi '
     />
     <Comentarios
     urlImagen='https://i.picsum.photos/id/927/64/64.jpg?hmac=rGP6nl1EY7Tpwqg0ciRi7L3lVhXCwIp-s5jcf-ZGw_k'
     persona='Vanina'
     texto='y  content  and adjust it as needed.'
     />

    </div>
  );
}

export default App;
