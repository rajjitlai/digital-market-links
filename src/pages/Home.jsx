import { useState } from "react";
import HeaderTop from "../components/HeaderTop";
import HeaderMain from "../components/HeaderMain";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
    const [filter, setFilter] = useState("All");

    return (
        <div className="flex flex-col min-h-screen">
            <HeaderTop />
            <HeaderMain />
            <Hero />

            <Navbar setFilter={setFilter} />
            <MobileNavbar />

            <main className="flex-1 container mx-auto px-4 py-6">
                <Products filter={filter} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
