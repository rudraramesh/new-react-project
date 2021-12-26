import React from 'react'
import '../components/style.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import LatestProduct from '../components/LatestProduct'
import TrendingProduct from '../components/TrendingProduct'
import Footer from '../components/Footer'



const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <LatestProduct/>
            <TrendingProduct/>
            <Footer/>
           
        </div>
    )
}

export default HomePage
