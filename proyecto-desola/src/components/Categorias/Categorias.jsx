import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-light">Productos</button>
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/category/1"}>Aromaterapia</Link></li>
                    <li><Link className="dropdown-item" to={"/category/2"}>Sahumerios</Link></li>
                    <li><Link className="dropdown-item" to={"/category/3"}>Libros</Link></li>
                    <li><Link className="dropdown-item" to={"/category/4"}>Piedras y gemas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/5"}>Tarot</Link></li>
                    <li><Link className="dropdown-item" to={"/category/6"}>Velas</Link></li>
                </ul>
            </li>
        </>
    );
}

export default Categorias;
