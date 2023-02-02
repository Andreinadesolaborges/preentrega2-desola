import {useState, useEffect} from "react";
import Itemlist from "../ItemList/ItemList";
export const Itemlistcontainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => {const productList = Itemlist({products}) //Array de productos jsx
        console.log(productList)
        setProductos (productList)
    })
    }, [])

    return (
        <>
            <div className="row align-items-center py-3">
            {productos}
            </div>
            
        </>
    );
}


