const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-light">Productos</button>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Aromaterapia</a></li>
                    <li><a className="dropdown-item" href="#">Sahumerios</a></li>
                    <li><a className="dropdown-item" href="#">Libros</a></li>
                    <li><a className="dropdown-item" href="#">Piedras y gemas</a></li>
                    <li><a className="dropdown-item" href="#">Tarot</a></li>
                    <li><a className="dropdown-item" href="#">Velas</a></li>
                </ul>
            </li>
        </>
    );
}

export default Categorias;
