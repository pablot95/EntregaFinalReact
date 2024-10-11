import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    

    return (
    <header>
        <Link to="/">
        <h1><img src="../Imagenes/TianaLogo.png" alt="" /></h1>
        </Link>

        <nav>
            <ul>
                <li><NavLink to="/categoria/tumbler">Tumblers</NavLink></li>
                <li><NavLink to="/categoria/termo">Termos</NavLink></li>
                <li><NavLink to="/categoria/vasito">Vasitos</NavLink></li>
                <li><NavLink to="/categoria/botella">Botellas</NavLink></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar