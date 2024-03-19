import Navbar from './components/Navbar';
import Blog from './components/Home';
import Bloglist from './components/Bloglist';
import BlogDetails from './components/BlogDetails';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';
import Create from './components/create';
import Notfound from './components/Notfound';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
         <Router>
            <div className='App'>
               <Navbar></Navbar>
               <div className='content'>
 
                <Switch>
                  <Route exact path='/'>
                    <Blog/>
                  </Route>

                  <Route path='/create'>
                    <Create/>
                  </Route>

                  <Route path='/BlogDetail/:id'>
                    <BlogDetails/>
                  </Route>


                  <Route path='*'>
                    <Notfound/>
                  </Route>

               
                </Switch>
                </div>
            </div>
              
         </Router >

  );
}

export default App;