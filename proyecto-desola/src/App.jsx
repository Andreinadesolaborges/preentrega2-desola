import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify//
import { ToastContainer } from  'react-toastify';

import Navbar from "./components/Navbar/Navbar";
import Cardcontainer from "./components/CardContainer/CardContainer";
import { Itemdetailcontainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Itemlistcontainer } from './components/ItemListContainer/ItemListContainer';
import { Contact } from './components/Contact/Contact';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Cardcontainer/>}/> 
          <Route path='/item/:id' element={<Itemdetailcontainer/>}/> 
          <Route path='/category/:nombreCategoria' element={<Itemlistcontainer/>}/>
          <Route path='/contacto' element={<Contact/>}/> 
        </Routes>
        <ToastContainer/>
      </BrowserRouter>

    </>
  );
}

export default App;
