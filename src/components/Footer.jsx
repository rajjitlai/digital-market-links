import { FaFacebook, FaInstagram, FaSnapchat, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-black">TREAT PATH GLOBAL</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Quality Health and Pet Care Medicines
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold text-black">Company</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#products" className="hover:text-primary hover:underline">Products</a></li>
                            <li><a href="#services" className="hover:text-primary hover:underline">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">Support</h3>
                        <ul className="mt-2 space-y-2">
                            {/* <li><a href="#" className="hover:text-primary hover:underline">Help Center</a></li> */}
                            <li><a href="#contact" className="hover:text-primary hover:underline">Contact Us</a></li>
                            {/* <li><a href="#" className="hover:text-primary hover:underline">Privacy Policy</a></li> */}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-black">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="https://www.facebook.com/profile.php?id=61561559393495" target='_blank' className="hover:text-primary"><FaFacebook size={20} /></a>
                        <a href="https://www.snapchat.com/add/treatpathglobal?share_id=Nz03kAb8DLI&locale=en-US" target='_blank' className="hover:text-primary"><FaSnapchat size={20} /></a>
                        <a href="https://www.instagram.com/treatpathglobal/" target='_blank' className="hover:text-primary"><FaInstagram size={20} /></a>
                        <a href="https://in.pinterest.com/treatpath/" target='_blank' className="hover:text-primary"><FaPinterest size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                © 2024 - {new Date().getFullYear()} TREAT PATH GLOBAL. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
