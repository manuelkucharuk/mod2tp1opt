import React, { useState } from 'react';
import Producto from './Producto'
import ConfirmacionCompra from './ConfirmacionCompra'

//Se puede comprar aún cuando cantDisponible<=0

function App() {
    const [productoComprado,setProductoComprado] = useState(false)
    return (
        <div>
            <Producto cantDisponible={100} setProductoComprado={setProductoComprado}/>
            <ConfirmacionCompra mostrar={productoComprado}/>
        </div>
    );
}

export default App;
