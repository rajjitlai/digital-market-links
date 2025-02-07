import { useState } from 'react'
import HeaderTop from "../components/HeaderTop"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'
import HeaderMain from '../components/HeaderMain'
import MobileNavbar from '../components/MobileNavbar'

const Home = () => {
    const [filter, setFilter] = useState(null)

    return (
        <div className='flex flex-col w-full h-screen'>
            <HeaderTop />
            <HeaderMain />
            <Hero />
            <Navbar setFilter={setFilter} />
            <MobileNavbar />
            <Products filter={filter} />
            <Footer />
        </div>
    )
}

export default Home
