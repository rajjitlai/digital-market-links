import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsSnapchat } from 'react-icons/bs'

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className='container py-4'>
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsSnapchat />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsPinterest />
                        </div>
                    </div>

                    <div className='text-gray-500 text-[12px]'>
                        <b>FREE CREDITS</b> if you order now
                    </div>

                    <div className='flex gap-4'>
                        <select name="currency" id="currency" className='text-gray-500 text-[12px] w-[70px]'>
                            <option value="USD $">USD $</option>
                            <option value="EUR €">EUR €</option>
                        </select>
                        <select name="language" id="language" className='text-gray-500 text-[12px] w-[80px]'>
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop