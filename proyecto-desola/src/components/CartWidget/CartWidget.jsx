import cart from '../../img/cart.svg'
import cartDark from '../../img/cart-dark.svg'
import { useDarkModeContext } from '../../context/DarkModeContext';
const Cartwidget = ({ cantCarrito }) => {
    const {darkMode} = useDarkModeContext();
    return (
        <>
            <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn`}>
                <img className={`align-self-center align-text-center ${darkMode ? 'd-none' : 'd-inline-block'}`}src={cart} alt={"cart"} style={{ height: 16 }}/>
                <img className={`align-self-center align-text-center ${darkMode ? 'd-inline-block' : 'd-none'}`}src={cartDark} alt={"cart"} style={{ height: 16 }}/>
                <span className="cartText">Carrito</span>
                <span className={`badge rounded-pill ${darkMode ? 'bg-primary' : 'bg-secondary'}`}>{cantCarrito}</span>
            </button>

        </>
    );
}

export default Cartwidget;
