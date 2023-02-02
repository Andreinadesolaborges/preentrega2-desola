import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Itemlist from "../ItemList/ItemList";
export const Itemlistcontainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    useEffect(() => {
        if (idCategoria){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt (idCategoria))
                const productsList = Itemlist({ products }) //Array de productos jsx
                console.log(productsList)
                setProductos(productsList)
            })
        }
        else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = Itemlist({ products }) //Array de productos jsx
                console.log(productsList)
                setProductos(productsList)
            })
        }
    }, [])

    return (
        <>
            <div id="productos" className="container-fluid p-3 border-top border-bottom">
                <div className="row align-items-center py-3">
                    <div className="col-12 text-center align-self-center mt-3">
                        <h2>Productos</h2>
                    </div>
                    <div className="row align-items-center py-3">
                        {productos}
                    </div>
                </div>
            </div>
        </>
    );
}


