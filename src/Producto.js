import React, { useState } from 'react';
import './Producto.css';


function Producto(props) {
    const [cantDisponible, setCantDisponible] = useState(props.cantDisponible);

    const handleClick = ()=>{
        setCantDisponible(cantDisponible-1)
        props.setProductoComprado(true)
    }

    return (
    <div className="producto">
        <div className="imagen">
            <img src={process.env.PUBLIC_URL + '/producto.webp'} alt=''/>
        </div>
        <div className = "datos">
            <p className = "nombre">
                Harry Potter y la piedra filosofal
            </p>
            <p className = "precio">
                $1500
            </p>
            <p className = "cantidad">
                Cantidad disponible : {cantDisponible}
            </p>
            <p className = "pComprar">
                <button id = "btnComprar" onClick={handleClick}>
                    Comprar
                </button>
            </p>
        </div>
    </div>
  );
}

export default Producto;
