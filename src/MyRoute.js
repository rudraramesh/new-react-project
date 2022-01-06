import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Second from './Second'
import Nnewcomp from './Nnewcomp'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Cart from './pages/Cart'
import Deals from './pages/Deals'
import Viewdetails from './pages/Viewdetails'
import IncrementDecrement from './hooks/IncrementDecrement'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './context/Show'
import FormValidation from './validation/FormValidation'
import MainPage from './redux/reducer/MainPage'

const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/deals" element={<Deals/>} />
                <Route path="/viewdetails" element={<Viewdetails/>} />

                {/* hooks */}
                <Route path="/increment" element={<IncrementDecrement/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/data" element={<DataFetch/>} />
                <Route path="/main" element={<Main/>} />

                {/* context */}
                <Route path="/context" element={<Show/>} />


                {/* form validation */}
                <Route path="/fvalidation" element={<FormValidation/>} />
                

                {/* redux */}

                <Route path="/reduxdemo" element={<MainPage/>} />
            </Routes>
        </Router>
    )
}

export default MyRoute
