
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdBnMvTcSiRTpBEk-Iysq-LbVmyrUmVPg",
  authDomain: "proyecto-react-75934.firebaseapp.com",
  projectId: "proyecto-react-75934",
  storageBucket: "proyecto-react-75934.appspot.com",
  messagingSenderId: "350681035198",
  appId: "1:350681035198:web:b3e9dbeb9c2b714f84c9ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(); //Consultar BDD

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json');
    const productos = await promise.json ();
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {

            idCategoria: prod.idCategoria,
            nombreCategoria: prod.nombreCategoria,
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img

        })
    })
}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"));
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}