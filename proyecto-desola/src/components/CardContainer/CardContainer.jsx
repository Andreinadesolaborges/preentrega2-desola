import { Itemlistcontainer } from "../ItemListContainer/ItemListContainer";
import Herocontainer from "../HeroContainer/Herocontainer";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Cardcontainer = () => {

    return (
        <>
            <Herocontainer mainHeader={"Bienvenid@s a la tienda de Nina"} subtitle={"La magia existe"}/> 
            <Itemlistcontainer/>
            
        </>
    );
}

export default Cardcontainer;
