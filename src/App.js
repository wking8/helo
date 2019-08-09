import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default withRouter(App);
