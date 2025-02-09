/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { navOther } from "../constants";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MobileSidebar = ({ setFilter }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const userCheck = user?.labels?.includes("admin");

    const handleProtectedRoute = (e) => {
        if (!user) {
            e.preventDefault();
            navigate("/login");
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className="lg:hidden fixed top-4 left-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl p-2 bg-white rounded-full shadow-md"
            >
                {isOpen ? <AiOutlineClose /> : <IoMenuOutline />}
            </button>

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-3xl"
                >
                    <AiOutlineClose />
                </button>

                <div className="p-6 px-12 mt-12 flex flex-col justify-between text-left">
                    {/* Category Buttons */}
                    <div className="flex flex-col gap-4">
                        {["All", "Hot", "Health", "Pets", "Men", "Women"].map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setFilter(category);
                                    setIsOpen(false);
                                }}
                                className="hover:text-primary hover:underline text-left"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* navOther Buttons */}
                    {navOther?.length > 0 && (
                        <div className="mt-4">
                            {navOther.map((other) => (
                                <a
                                    href={other.path}
                                    key={other.label}
                                    className="block w-full text-center px-4 py-2 bg-primary text-white hover:bg-secondary hover:text-gray-200 mt-2"
                                    onClick={() => setIsOpen(false)} // Closes the sidebar on click
                                >
                                    {other.label}
                                </a>
                            ))}
                        </div>
                    )}
                    <div className="flex flex-col mt-16 gap-4 text-gray-500 cursor-pointer">
                        <hr />
                        <Link to="/saved" onClick={handleProtectedRoute} className="flex flex-row gap-2 text-gray-500 hover:text-primary">
                            <span className="text-base font-bold">
                                Saved
                            </span>
                        </Link>

                        {user ? (
                            <Link
                                to={userCheck ? "/admin" : "/dashboard"}
                                className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-primary hover:underline"
                            >
                                <span>{user.username}</span>
                            </Link>
                        ) : (
                            <Link to="/login" className="flex items-center gap-1 text-gray-500 hover:text-primary transition">
                                <span className="text-base font-bold">
                                    Login
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
