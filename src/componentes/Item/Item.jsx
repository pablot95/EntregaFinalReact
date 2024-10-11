import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, imagen, stock}) => {
  return (
    <div className='Items'>
        <img src={imagen} alt={nombre} />
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>Disponibles: {stock} </p>
        {<button><Link to={`/item/${id}`}>Comprar</Link></button>}
    </div>
  )
}

export default Item