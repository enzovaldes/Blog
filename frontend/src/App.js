//import logo from './logo.svg';
//import './App.css';
import React from 'react'; 
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import modulos con componentes del blog


const App = () => (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/categoria/:id' component={Category} />
            <Route exact path='/blog/:id' component={BlogDetail} />
          </Switch>
        </Layout>
      </Router>

);
 





export default App;
