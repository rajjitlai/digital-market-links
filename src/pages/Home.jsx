import React from 'react'
import HeaderTop from "../components/HeaderTop"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'
import HeaderMain from '../components/HeaderMain'

const Home = () => {
    return (
        <div className='flex flex-col w-full h-screen'>
            <HeaderTop />
            <HeaderMain />
            <Navbar />
            <Hero />
            <Products />
            <Footer />
        </div>
    )
}

export default Home