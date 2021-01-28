import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Activities from './pages/Activities';
import Relationships from './pages/Relationships';
import Places from './pages/Places';
import Mindfulness from './pages/Mindfulness';
import PrajnaTIP from './pages/PrajnaTIP';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Activities} />
          <Route path='/activities' component={Activities} />
          <Route path='/relationships' component={Relationships} />
          <Route path='/places' component={Places} />
          <Route path='/mindfulness' component={Mindfulness} />
          <Route path='/prajnaTIP' component={PrajnaTIP} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
