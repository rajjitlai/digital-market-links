import { products } from "../constants";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className="container px-16 pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {products.map((product, index) => (
                    <Link to={`/product/${product.id}`} key={index} className="w-full">
                        <ProductCard
                            img={product.img}
                            title={product.title}
                            desc={product.desc}
                            price={product.price}
                            rating={product.rating}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
