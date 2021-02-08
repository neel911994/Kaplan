import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './Create'
import {AppProvider} from './context'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

const ReactRouterSetup = ()=>{
  return <Router>
    <Route exact path='/Create' component={Create}></Route>
  </Router>
}
export default ReactRouterSetup;
