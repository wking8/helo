import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
      <Auth />
      <Form />
      <Post />
    </div>
  );
}

export default App;
