import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { getProd } from "../lib/getProd";

// eslint-disable-next-line react/prop-types
const Products = ({ filter }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const gotProd = await getProd();
                setProducts(gotProd);
                console.log("Fetched products:", gotProd);
            } catch (err) {
                console.error("Error fetching products", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const truncateDescription = (desc, length = 100) => {
        return desc.length > length ? `${desc.substring(0, length)}...` : desc;
    };

    // Apply filtering based on the selected category (filter)
    const filteredProducts = filter
        ? products.filter((product) => product.category === filter)
        : products;

    return (
        <div className="container px-16 pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Link to={`/product/${product.$id}`} key={product.$id} className="w-full">
                                <ProductCard
                                    img={product.item_image}
                                    title={product.item_name}
                                    desc={truncateDescription(product.item_description)}
                                    price={product.item_price}
                                />
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">No products found for this category.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
