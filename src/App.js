import Home from './Home'
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from './New';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='content'>
        
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/create'>
            <New/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>
        </Switch>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
