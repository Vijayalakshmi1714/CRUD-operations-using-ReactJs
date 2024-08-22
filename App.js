import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import Edit from './components/edit'

function App() {
  return (
    <div className="App">
      <h1> Students List</h1>
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/create"element={<Create/>}/>
          <Route path="/edit"element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
