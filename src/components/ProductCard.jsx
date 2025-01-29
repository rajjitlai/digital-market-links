import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const generateRating = (rating) => {
    switch (rating) {
        case 1:
            return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
        case 2:
            return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
        case 3:
            return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
        case 4:
            return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
            )
        case 5:
            return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            )
        default:
            break
    }
}

const ProductCard = ({ img, title, desc, rating, price }) => {
    return (
        <div className='px-4 border border-gray-200 rounded-md max-w-[400px]'>
            <div>
                <img src={img} alt="title" width={200} className='w-full h-[300px] object-cover' />
            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-primary font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                <div>{generateRating(rating)}</div>
                <div className='font-bold flex gap-4'>
                    ${price}
                </div>
            </div>
        </div>
    )
}

export default ProductCard