import { useDarkModeContext } from "../../context/DarkModeContext"
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
export const Checkout = () => {
    const { darkMode } = useDarkModeContext();
    const { carrito, emptyCart, totalPrice } = useCarritoContext();

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <div className="row align-items-center py-3">
                        <div className="col-12 text-center align-self-center mt-3">
                            <h2 className={`${darkMode ? 'text-light' : 'text-dark'} py-3`}>El Carrito está vacío</h2>
                            <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`}>Ir a comprar productos</button></Link>
                        </div>
                    </div>
                </>
                :
                <div className="container px-5">
                    <div className="row align-items-center py-3">
                        <div className="col-12 align-self-center mt-3">
                            <h2 className={`${darkMode ? 'text-light' : 'text-dark'} text-center py-3`}>Checkout</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                    <input type="text" className="form-control" name="nombre" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Repetir email</label>
                                    <input type="text" className="form-control" name="repEmail" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label">Celular</label>
                                    <input type="number" className="form-control" name="celular" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                    <input type="texy" className="form-control" name="direccion" />
                                </div>
                                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}