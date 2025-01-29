import { FaFacebook, FaInstagram, FaSnapchat, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-black">TREAT PATH GLOBAL</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Creating awesome experiences for the web.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold text-black">Company</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-200">About</a></li>
                            <li><a href="#" className="hover:text-gray-200">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-200">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">Support</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-black">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-white"><FaSnapchat size={20} /></a>
                        <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-white"><FaPinterest size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                © {new Date().getFullYear()} TREAT PATH GLOBAL. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
