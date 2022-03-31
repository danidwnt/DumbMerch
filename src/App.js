import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
            <Routes>
                    <Route exact path='/' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>               
            </Routes>
      </Router>
  );
}

export default App;
