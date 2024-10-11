import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { db } from '../../services/config'
import {where,collection, getDocs, query } from 'firebase/firestore'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams ()

    useEffect (() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : (collection(db,"productos"))
        
        getDocs(misProductos).then (res => {
            const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id , ...data}
            })
            setProductos(nuevosProductos)
        })
        
    }, [idCategoria])


    return (
    <div className='ItemListCointainer'> 
        <ItemList productos ={productos}/>
    </div>
    )
}

export default ItemListContainer