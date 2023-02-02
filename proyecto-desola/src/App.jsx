import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Herocontainer from "./components/HeroContainer/Herocontainer";
import Cardcontainer from "./components/CardContainer/CardContainer";
import {Itemdetailcontainer} from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
        <Navbar />
        <Herocontainer mainHeader={"Bienvenid@s a la tienda de Nina"} subtitle={"La magia existe"} />
        <Cardcontainer/>
        <Itemdetailcontainer/>
    </>
  );
}

export default App;
