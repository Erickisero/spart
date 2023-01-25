import React from 'react';
import Navbar from './components/navbar';
import Blog from './components/blog';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Create from "./components/Create";
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound.JS';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content" >
      <Switch>
        {<Route exact path="/">
           <Blog />
          </Route>}
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
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
