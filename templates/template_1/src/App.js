import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Activities from './pages/Activities';
import Relationships from './pages/Relationships';
import Places from './pages/Places';
import Mindfulness from './pages/Mindfulness';
import EIP from './pages/EIP';
import Dashboard from './pages/eip/Dashboard';
import Upgrade from './pages/eip/Upgrade';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={EIP} />
        <Route path='/activities' exact component={Activities} />
        <Route path='/relationships' exact component={Relationships} />
        <Route path='/places' exact component={Places} />
        <Route path='/mindfulness' exact component={Mindfulness} />
        <Route path='/eip' exact component={EIP} />
        <Route path='/eip/dashboard' exact component={Dashboard} />
        <Route path='/eip/upgrade' exact component={Upgrade} />
      </Switch>
    </Router>
  );
}

export default App;
