import React from 'react';
import {Link, NavLink} from 'react-router-dom'


//<img src="https://www.smartstateindia.com/wp-content/uploads/2020/08/cyber-scurity.jpg" class="d-block w-100 background" alt="..."></img>
const Home = () => (
       <div class="jumbotron">
           <div className='jumbotron at-5'>
                <h1 class="display-4 text-white">Bienvenid@s!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <Link class="btn btn-primary btn-dark" img-background='.' to="/blog" role="button">Ir al blog</Link>
            </div>
        </div>
);

export default Home;