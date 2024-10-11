import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css"
import { db } from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false); 
  const { idItem } = useParams();

  useEffect(() => {
      const buscarProducto = async () => {
          try {
              const nuevoDoc = doc(db, "productos", idItem);
              const res = await getDoc(nuevoDoc);

              if (!res.exists()) { 
                  setError(true);
              } else {
                  const data = res.data();
                  const nuevoProducto = { id: res.id, ...data };
                  setProducto(nuevoProducto);
              }
          } catch (error) {
              setError(true); 
          }
      };

      buscarProducto();
  }, [idItem]);

  if (error) {
      return <h2>Error 404!</h2>;
  }



  return (
    <div className='ItemDetailContainer'>
      <div>
        <ItemDetail {...producto}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer