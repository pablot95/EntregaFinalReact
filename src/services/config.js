
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entregareacttravi.firebaseapp.com",
  projectId: "entregareacttravi",
  storageBucket: "entregareacttravi.appspot.com",
  messagingSenderId: "496717404911",
  appId: "1:496717404911:web:643510ac3d495d968a191a"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


/*const productos = [
    {
        nombre: "Tumbler color azul",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: "1",
        imagen: "../Imagenes/Azul.jpg",
        idCat: "tumbler",
        stock: 10
    },
    {
        nombre: "Tumbler color blanco",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: "2",
        imagen: "../Imagenes/TumblerHeader.png",
        idCat: "tumbler",
        stock: 15
    },
    {
        nombre: "Tumbler color celeste",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: "3",
        imagen: "../Imagenes/Celeste.jpg",
        idCat: "tumbler",
        stock: 18
    },
    {
        nombre: "Tumbler color verde",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: "5",
        imagen: "../Imagenes/Verde.jpg",
        idCat: "tumbler",
        stock: 20
    },
    {
        nombre: "Tumbler color lila",
        precio: 25000,
        descripcion: "Tumbler termico 24 horas frio calor",
        id: "6",
        imagen: "../Imagenes/Lila.jpg",
        idCat: "tumbler",
        stock: 14
    },
    {
        nombre: "Termo color negro",
        precio: 25000,
        descripcion: "Termo marca Journey 24 horas frio calor",
        id: "7",
        imagen: "../Imagenes/TermoHeader.png",
        idCat: "termo",
        stock: 36
    },
    {
        nombre: "Vaso termico negro",
        precio: 25000,
        descripcion: "Vaso termico 24 horas frio calor",
        id: "8",
        imagen: "../Imagenes/VasitoHeader.png",
        idCat: "vasito",
        stock: 50
    },
    {
        nombre: "Botella color rosa",
        precio: 25000,
        descripcion: "Botella termica 24 horas frio calor",
        id: "4",
        imagen: "../Imagenes/BotellitaHeader.png",
        idCat: "botella",
        stock: 74
    },
]

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    productos.forEach((producto)=> {
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })
    try{
        await batch.commit();
        console.log("funciono")
    } catch (error){(console.log("no funciono"))}
}

subirProductos()*/