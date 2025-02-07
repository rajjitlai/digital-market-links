/* eslint-disable react/prop-types */
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { useState } from 'react'


const ProductCard = ({ img, title, desc, price }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        // Add function logic here (e.g., save product to wishlist)
    };

    return (
        <div className='border border-gray-200 rounded-lg max-w-[300px] shadow-md hover:shadow-lg transition-all p-4'>
            <div className='relative'>
                <img
                    src={img}
                    alt={title}
                    className='w-full h-[250px] object-cover rounded-lg'
                />
                <button
                    className='absolute top-3 right-3 text-2xl text-gray-600 hover:text-primary'
                    onClick={handleBookmark}
                >
                    {bookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                </button>
            </div>
            <div className='space-y-2 pt-4 text-center'>
                <h2 className='text-primary font-semibold uppercase'>{title}</h2>
                <p className='text-gray-500 text-sm max-w-[200px] mx-auto'>{desc}</p>
                <div className='font-bold text-lg text-primary'>${price}</div>
            </div>
        </div>
    )
}

export default ProductCard
