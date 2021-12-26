import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Second from './Second'
import Nnewcomp from './Nnewcomp'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Cart from './pages/Cart'
import Deals from './pages/Deals'

const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/deals" element={<Deals/>} />
                
            </Routes>
        </Router>
    )
}

export default MyRoute
