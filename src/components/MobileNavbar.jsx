import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { IoMenuOutline } from 'react-icons/io5'

const MobileNavbar = () => {
    return (
        <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
            <div className='flex justify-between text-[28px] py-2 cursor-pointer'>
                <IoMenuOutline />
                <AiOutlineHome />
                <FiHeart />
            </div>
        </div>
    )
}

export default MobileNavbar