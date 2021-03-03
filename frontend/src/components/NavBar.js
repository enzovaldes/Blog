import React from 'react';
import {Link, NavLink} from 'react-router-dom'



const NavBar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand text-white" to='/' href="#">
            <img src="https://sitseguridad.goalliance.cl/wp-content/uploads/2019/04/Web-Security-PNG-Transparent-Image.png" width="40" height="40" className="d-inline-block align-top " alt="" loading="lazy"/>
                Blog Informático
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <NavLink className='nav-link' exact to='/'>Inicio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' exact to='/blog'>Blog</NavLink>
                </li>
            </ul>
        </div>
    </nav>


);

export default NavBar;