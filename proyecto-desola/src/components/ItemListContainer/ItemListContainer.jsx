import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemList}  from "../ItemList/ItemList";

//Context//
import { useDarkModeContext } from "../../context/DarkModeContext";
export const Itemlistcontainer = () => {
    const [productos, setProductos] = useState([]);
    const {nombreCategoria} = useParams();
    const {darkMode} = useDarkModeContext();
    console.log(darkMode);
    useEffect(() => {
        if (nombreCategoria){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.nombreCategoria === nombreCategoria)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos jsx
                console.log(productsList)
                setProductos(productsList)
            })
        }
        else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos jsx
                console.log(productsList)
                setProductos(productsList)
            })
        }
    }, [nombreCategoria])

    return (
        <>
            <div id="productos" className="container-fluid p-3 border-top border-bottom">
                <div className="row align-items-center py-3">
                    <div className="col-12 text-center align-self-center mt-3">
                        <h2 className={`${darkMode ? 'text-light' : 'text-dark'} py-3`}>Productos</h2>
                    </div>
                    <div className="row align-items-center py-3">
                        {productos}
                    </div>
                </div>
            </div>
        </>
    );
}


