import Itemcount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
    return (
        <>
            <div className="col-6 col-sm-4 col-md-3 text-center align-self-center">
                <div className="card hvr-float-shadow my-3">
                    <img  src={`../img/${item.img}`} className="card-img-top img-fluid" alt={`Imagen de ${item.nombre}`} />
                    <div className="card-body">
                        <h4 className="card-title">{item.nombre}</h4>
                        <p className="card-text card-info">{item.descripcion}</p>
                        <h6 className="price-text badge rounded-pill bg-light d-block mx-auto">${new Intl.NumberFormat('de-DE').format(item.precio)}</h6>
                        <button id={item.id} className="btn btn-primary zoomIn d-block mx-auto">Ver Producto</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
