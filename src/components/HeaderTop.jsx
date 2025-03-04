import { BsFacebook, BsInstagram, BsPinterest, BsSnapchat } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className="container py-4 px-16">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-4">
                        <div className='header_icons'>
                            <Link to="https://www.facebook.com/profile.php?id=61561559393495" target='_blank'>
                                <BsFacebook />
                            </Link>
                        </div>
                        <div className='header_icons'>
                            <Link to="https://www.snapchat.com/add/treatpathglobal?share_id=Nz03kAb8DLI&locale=en-US" target='_blank'>
                                <BsSnapchat />
                            </Link>
                        </div>
                        <div className='header_icons'>
                            <Link to="https://www.instagram.com/treatpathglobal/" target='_blank'>
                                <BsInstagram />
                            </Link>
                        </div>
                        <div className='header_icons'>
                            <Link to="https://in.pinterest.com/treatpath/" target='_blank'>
                                <BsPinterest />
                            </Link>
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