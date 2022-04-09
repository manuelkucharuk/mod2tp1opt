import './ConfirmacionCompra.css'

function ConfirmacionCompra(props) {
   if(props.mostrar){
        return(
            <div className="confirmacionCompra">
                <p>Gracias por tu compra</p>
            </div>
        )
    }
}

export default ConfirmacionCompra;
