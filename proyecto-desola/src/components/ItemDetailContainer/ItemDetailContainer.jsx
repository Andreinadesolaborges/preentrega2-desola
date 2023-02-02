import {useState, useEffect} from "react";
import { Itemdetail } from "../ItemDetail/ItemDetail";
export const Itemdetailcontainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => { 
        const item = products.find(prod => prod.id === 2)
        setProducto(item)
    })
    }, [])

    return (
        <>
             <div className="row align-items-center py-3">
                <Itemdetail item={producto}/>
            </div>
        </>
    );
}


