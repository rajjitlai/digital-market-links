
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useState } from "react";
import Layout from "../Layout";
import MobileSidebar from "../components/MobileNavbar";

const Home = () => {
    const [filter, setFilter] = useState("All");

    return (
        <Layout>
            <Hero />
            <Navbar setFilter={setFilter} />
            <MobileSidebar setFilter={setFilter} />
            <Products filter={filter} />
            <Services />
            <Contact />
        </Layout>
    );
};

export default Home;
