import './App.css';
import Search from './Search'
import Books from './BooksList'
import Create from './Create'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <section>
        <div className='pageheader'>
          <h1>Books</h1>
          <Router>
            <nav >
              <Link to='/Create' className='header-button'>Create New Book</Link>
            </nav>
            <Switch>
              <Route exact path='/Create' component={Create}></Route>
            </Switch>
          </Router>
          
        </div>
        <Search />
        <Books />
      </section>
    </>
  );
}

export default App;
