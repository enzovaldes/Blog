import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';


//conexion de la api con front mediante axios

//Recupera los archivos destacados
const Blog = () => {
    const [blogs, setPostBlogs] = useState([]);
    const [blogDestacado, setPostBlogDestacado] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}api/Destacados`);
                setPostBlogDestacado(res.data[0]);
                console.log(res.data)
            }
            catch(err) {

            }
        }
        fetchData();
    },[]);

//Este recupera 
    useEffect(() => {
        const fetchBlog = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}api/Contenido`);
                setPostBlogs(res.data);
                console.log(res.data)
            }
           catch(err) {
    
            }
        }
        fetchBlog();
    },[]);

        const getBlog = () => {
            let list = [];
            let result = [];

            blogs.map(PostBlog => {
                return list.push(
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">{PostBlog.Categoria}</strong>
                            <h3 className="mb-0">{PostBlog.Titulo}</h3>
                            <div className="mb-1 text-muted">{PostBlog.Fecha}</div>
                            <p className="card-text mb-auto">{PostBlog.MiniDes}</p>
                            <Link to={`/blog/${PostBlog.Slug}`} className="stretched-link">Seguir Leyendo</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img width='260' height='250' src={PostBlog.Miniatura} alt='Imagen' />
                        </div>
                  </div>
                );
            })
            for (let i=0; i< list.length; i +=2) {
                result.push(
                    <div key={i} className='row mb-2'>
                        <div className='col-md-6'>
                            {list[i]}
                        </div>
                        <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                        </div>

                    </div>
                )
            }
            return result;
           
        };
        return (
            <div className='container mt-3'>
                <div className = 'nav-scroller py-1 mb-2'>
                    <nav className= 'nav d-flex justify-content-between'>
                        <Link className='p-2 text-muted' to='/categoria/Ciber-seguridad'> CiberSeguridad</Link>
                        <Link className='p-2 text-muted' to='/categoria/Inteligencia-de-Seguridad'> Inteligencia de Seguridad</Link>
                        <Link className='p-2 text-muted' to='/categoria/SIEM'> SIEM</Link>
                        <Link className='p-2 text-muted' to='/categoria/Cloud'> Cloud</Link>
                        <Link className='p-2 text-muted' to='/categoria/IOT'> Internet of Things</Link>
                        <Link className='p-2 text-muted' to='/categoria/Gestion-de-vulnerabilidades'> Gestion de Vulnerabilidades</Link>
                    </nav>
                </div>
                <div className='jumbotron p-4 md-5 text-white rounded bg-dark'>
                    <div className='col-md-6 px-0'>
                        <h1 className='display-4 font-italic'>{blogDestacado.Titulo}</h1>
                        <p className='lead my-3'>{blogDestacado.MiniDes}</p>
                        <p className='lead mb-0'>
                            <Link to={`/blog/${blogDestacado.Slug}`} className='text-white font-weight-bold'>
                                Seguir leyendo...
                            </Link>
                        </p>
                    </div>
                </div>

                {getBlog()}
            </div>
        );


};

export default Blog;