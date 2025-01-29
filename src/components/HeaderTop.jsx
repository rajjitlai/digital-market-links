import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsSnapchat } from 'react-icons/bs'

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className="container py-4 px-16">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-4">
                        <div className='header_icons'>
                            <BsFacebook />
                        </div>
                        <div className='header_icons'>
                            <BsSnapchat />
                        </div>
                        <div className='header_icons'>
                            <BsInstagram />
                        </div>
                        <div className='header_icons'>
                            <BsPinterest />
                        </div>
                    </div>

                    <div className='text-gray-500 text-[17px]'>
                        <b>FREE CREDITS</b> for opening a new account
                    </div>

                    {/* extra */}
                    <div className=''>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop