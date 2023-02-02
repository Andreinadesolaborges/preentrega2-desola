import { Itemlistcontainer } from "../ItemListContainer/ItemListContainer";

const Cardcontainer = () => {
    return (
        <>
            <div id="productos" className="container-fluid p-3 border-top border-bottom">
                <div className="row align-items-center py-3">
                    <div className="col-12 text-center align-self-center mt-3">
                        <h2>Productos</h2>
                    </div>
                </div>
                <Itemlistcontainer/>
            </div>
        </>
    );
}

export default Cardcontainer;
