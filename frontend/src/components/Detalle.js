import React, { useState } from 'react';
import {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';



const Detalle = () => {
    const [blogs, setBlog] = useState({});
    const CrearBlog = () => {
        return {__html: blogs.content}
    };

    return (
        <div className= 'container mt-3'>
            <h1 className = 'display-2'>Titulo</h1>
            <h2 className = 'text-muted mt-3'> Categoria: categoria</h2>
            <h4>Fecha</h4>
            <div className = 'mt-5 mb-5' dangerouslySetInnerHTML={CrearBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'></Link></p>

        </div>
    )
    
};

export default Detalle;