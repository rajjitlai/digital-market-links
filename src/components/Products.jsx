import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { getProd } from "../lib/getProd";

// Import other product category components
import Health from "./filterComponents/Health";
import Pets from "./filterComponents/Pets";
import Men from "./filterComponents/Men";
import Women from "./filterComponents/Women";
import Hot from "./filterComponents/Hot";

// eslint-disable-next-line react/prop-types
const Products = ({ filter }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (filter === "All") {
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
        }
    }, [filter]);

    const truncateDescription = (desc, length = 100) => {
        return desc.length > length ? `${desc.substring(0, length)}...` : desc;
    };

    if (filter === "Hot") return <Hot />;
    if (filter === "Health") return <Health />;
    if (filter === "Pets") return <Pets />;
    if (filter === "Men") return <Men />;
    if (filter === "Women") return <Women />;

    return (
        <div className="container px-8 lg:px-16 pt-16 mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Products</h3>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Link to={`/product/${product.$id}`} key={product.$id} className="w-auto">
                                <ProductCard
                                    img={product.item_image}
                                    title={product.item_name}
                                    desc={truncateDescription(product.item_description)}
                                    price={product.item_price}
                                    tags={product.tags}
                                />
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">No products found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
