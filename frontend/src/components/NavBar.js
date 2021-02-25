import React from 'react';
import {Link, NavLink} from 'react-router-dom'



const NavBar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand text-white" to='/' href="#">
            <img src="https://lh3.googleusercontent.com/proxy/atfpYxfPvgJUcfQVjUmNChX0Xqk3CfkdjihEUcsirvfMUBtMBDUYLL5BascTXVKTModqPjBcnmMzt3mmjwaaMrh4HSgIfSqLxH_xbsyjcL_QA7Fdxsxc4-dhTgmIz1D-tQ" width="60" height="40" className="d-inline-block align-top " alt="" loading="lazy"/>
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