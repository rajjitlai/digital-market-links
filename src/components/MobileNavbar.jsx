import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { navItems } from '../constants';

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    const userCheck = user?.labels?.includes('admin');

    return (
        <div className="lg:hidden fixed top-4 left-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl p-2 bg-white rounded-full shadow-md"
            >
                {isOpen ? <AiOutlineClose /> : <IoMenuOutline />}
            </button>

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-3xl"
                >
                    <AiOutlineClose />
                </button>

                <div className="p-6 px-12 mt-12 flex flex-col justify-between text-left">
                    <div>
                        {navItems.map((item) => (
                            <div key={item.id} className="text-xl mb-4">
                                <Link to={item.path} className="hover:text-primary hover:underline">
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 border-t py-4 mt-10 text-left">
                        <Link to="/saved" className="flex gap-2 items-center">
                            <FiHeart className="text-2xl" />
                            <span className="text-xl">Saved</span>
                        </Link>

                        {user ? (
                            <Link to={userCheck ? "/admin" : "/dashboard"} className="flex flex-row gap-2">
                                <FaUserCircle className="text-2xl text-gray-600" />
                                <span className="text-xl text-gray-700">{user.username}</span>
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="flex gap-2 items-center text-gray-500 hover:text-primary transition"
                            >
                                <FaUserCircle className="text-2xl" />
                                <span className="text-xl">Login</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
