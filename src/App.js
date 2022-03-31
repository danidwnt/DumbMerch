import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import Login from './pages/Login';
import Register from './pages/Register';
import UserShop from './pages/UserShop';
import Profile from './pages/Profile';
import Rating from './pages/Rating';
import ComplainUser from './pages/ComplainUser';
import Product from './pages/Product';
import Category from './pages/Category';
import EditCategory from './pages/EditCategory';
import EditProduct from './pages/EditProduct';
import ComplainMassage from './pages/ComplainMassage';
import DetailProduct from './pages/DetailProduct';



function App() {
  return (
    <Router>
            <Routes>
                    <Route exact path='/' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/user-shop' element={<UserShop/>}/>
                    <Route exact path='/profile' element={<Profile/>}/>
                    <Route exact path='/Feedback' element={<Rating/>}/>
                    <Route exact path='/complain' element={<ComplainUser/>}/> 
                    <Route exact path='/product' element={<Product/>}/>
                    <Route exact path='/category' element={<Category/>}/>
                    <Route exact path='/edit-category' element={<EditCategory/>}/>
                    <Route exact path='/edit-product' element={<EditProduct/>}/>
                    <Route exact path='/complain-message' element={<ComplainMassage/>}/>
                    <Route exact path='/detail-product' element={<DetailProduct/>}/>             
            </Routes>
      </Router>
  );
}

export default App;
