import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { navItems } from '../constants';

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden fixed top-4 left-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl p-2 bg-white rounded-full shadow-md"
            >
                {isOpen ? <AiOutlineClose /> : <IoMenuOutline />}
            </button>

            <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-3xl"
                >
                    <AiOutlineClose />
                </button>

                <div className="p-6 mt-12 flex flex-col justify-between items-center">
                    <div>
                        {navItems.map((item) => (
                            <div key={item.id} className="text-xl mb-4">
                                <Link to={item.path} className='hover:text-primary hover:underline'>{item.label}</Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 border-t py-4">
                        <FaUserCircle className="text-3xl" />
                        <span className="text-xl">User Name</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
