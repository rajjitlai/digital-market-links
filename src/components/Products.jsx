import React from 'react'
import { products } from '../constants'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <div className=''>
            <div className="container px-16 pt-16">
                <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {
                        products.map((product, index) => (
                            <ProductCard
                            key={index}
                            img={product.img}
                            title={product.title}
                            desc={product.desc}
                            price={product.price}
                            rating={product.rating}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products