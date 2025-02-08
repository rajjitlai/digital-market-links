/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { navOther } from '../constants';

const MobileSidebar = ({ setFilter }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden fixed top-4 left-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl p-2 bg-white rounded-full shadow-md"
            >
                {isOpen ? <AiOutlineClose /> : <IoMenuOutline />}
            </button>

            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
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
                        {['All', 'Hot', 'Health', 'Pets', 'Men', 'Women'].map((category) => (
                            <button
                                key={category}
                                onClick={() => { setFilter(category); setIsOpen(false); }}
                                className="hover:text-primary hover:underline text-left"
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    {/* navOther Buttons */}
                    <div className="mt-4">
                        {navOther.map((other) => (
                            <button
                                key={other.label}
                                onClick={() => { setFilter(other.label); setIsOpen(false); }}
                                className="block w-full text-center px-4 py-2 bg-primary text-white hover:bg-secondary hover:text-gray-200 mt-2"
                            >
                                {other.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
