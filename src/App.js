import Home from './Home'
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from './New';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Router>
        <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path='/new'>
          <New/>
        </Route>
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
