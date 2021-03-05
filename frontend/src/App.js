//import logo from './logo.svg';
//import './App.css';
import React from 'react'; 
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import modulos con componentes del blog
import Layout from './layout/Layouts';
import Blog from './components/Blog';
import Categoria from './components/Categoria';
import Detalle from './components/Detalle';
import Home from './components/Home';



const App = () => (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/categoria/:id' component={Categoria} />
            <Route exact path='/blog/:id' component={Detalle} />
          </Switch>
        </Layout>
      </Router>

);
 





export default App;
