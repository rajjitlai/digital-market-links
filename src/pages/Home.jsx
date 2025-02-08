import { useState } from "react";
import HeaderTop from "../components/HeaderTop";
import HeaderMain from "../components/HeaderMain";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div className="flex flex-col min-h-screen">
            <HeaderTop />
            <HeaderMain />
            <Hero />

            <Navbar setFilter={setFilter} />
            <MobileNavbar setFilter={setFilter} />

            <main className="flex-1 container mx-auto px-4 md:px-16 py-6">
                <Products filter={filter} />
                <Services />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
