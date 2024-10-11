import { useState, useContext } from "react"
import {CarritoContext} from "../../context/CarritoContext" 
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import "./Checkout.css"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)



    const manejadorFormulario =(e) => {
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completa todos los campos")
            return;
        }
        
    

        
        if(email !== emailConfirmacion){
            setError("Los email no coinciden")
            return;
        }


        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };


        Promise.all(
            orden.items.map(async (productoOrden) =>{
                const productoRef = doc(db, "productos", productoOrden.id)

                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock


                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })
        )
        .then(()=>{

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito();
                setNombre("")
                setApellido("")
                setTelefono("")
                setEmail("")
                setEmailConfirmacion("")
            })
        })
    }

    return (
        <div className="Checkout">
            {ordenId ? ( 
                <div>
                    <strong>¡Gracias por tu compra! Tu número de orden es: {ordenId}</strong>
                    <br />
                    <Link to="/"><button className="botones1">Volver al inicio</button></Link>
                </div>
            ) : (
                <>
                    <h2>Ingresa tus datos para finalizar la compra:</h2>
                    <div className="CarritoMap">
                        {carrito.map(producto => (
                            <div key={producto.item.id}>
                                <p>{producto.item.nombre}</p>
                                <p>${producto.item.precio} x {producto.cantidad}</p>
                                <p>${(producto.item.precio * producto.cantidad).toFixed(2)}</p> 
                            </div>
                        ))}
                    </div>
                    <h3>Total de: ${total.toFixed(2)}</h3>
                    <form className="Labels" onSubmit={manejadorFormulario}>
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </div>
                        <div>
                            <label htmlFor="">Apellido</label>
                            <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                        </div>
                        <div>
                            <label htmlFor="">Teléfono</label>
                            <input type="number" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div>
                            <label htmlFor="">Confirmar email</label>
                            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button type="submit" className="botones1">Confirmar Compra</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default Checkout;