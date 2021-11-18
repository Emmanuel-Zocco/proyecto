import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nosotros from './components/pages/Nosotros';
import Productos from './components/pages/Productos';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/productos' component={Productos} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
