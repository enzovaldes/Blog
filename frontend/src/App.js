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
          </Switch>
        </Layout>
      </Router>

);
 





export default App;
