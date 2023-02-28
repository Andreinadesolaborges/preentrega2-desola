import { useState } from "react";
import { toast } from "react-toastify";
const Itemcount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState (valInicial);

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valInicial) && setContador(contador - 1);

    const agregarCarrito = () => {
        onAdd(contador);
        toast.success('🦄 Ha sido agregado');
    };
    return (
        <>
            <div className="text-center">
            <button className="btn btn-secondary pad-btn-counter" onClick={()=>restar()}>-</button>
            <span className="mx-1">{contador}</span>
            <button className="btn btn-secondary pad-btn-counter" onClick={()=>sumar()}>+</button>
            </div>
            <button className="btn btn-primary zoomIn d-block mx-auto" onClick={()=>agregarCarrito()}>Comprar</button>
        </>
    );
}

export default Itemcount;
