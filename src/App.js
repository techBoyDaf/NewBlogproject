import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to my blog'
  return (
    <Router>
        <div className="App">
      <Navbar />
      <div className="content">
        <Switch >
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/create">
        <Create />        
        </Route>
        <Route path="/about">
        <About />
        
        </Route>
        <Route path="/posts/:id">
        <BlogDetails />
        </Route>
        <Route path="*">
        <NotFound />
        
        </Route>
        </Switch>
    
          </div>
    </div>

    </Router>
    
  );
}

export default App;
