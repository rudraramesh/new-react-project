import React from 'react'
import '../components/style.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import LatestProduct from '../components/LatestProduct'
import TrendingProduct from '../components/TrendingProduct'
import Footer from '../components/Footer'
import Trending from '../components/Trending'



const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <LatestProduct/>
            <TrendingProduct/>
            <Trending/>
            <Footer/>
            
           
        </div>
    )
}

export default HomePage
