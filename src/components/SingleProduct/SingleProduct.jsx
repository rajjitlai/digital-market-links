import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProdById } from "../../lib/getProdById";
import { getProdByTags } from "../../lib/getProductByTags";
import RelatedProducts from "./RelatedProducts";
import { BsArrowLeft } from "react-icons/bs";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [relatedProd, setRelatedProd] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const prodData = await getProdById(id);
                setProduct(prodData);

                if (prodData?.tags?.length > 0) {
                    const relatedProds = await getProdByTags(prodData.tags);
                    setRelatedProd(relatedProds);
                }
            } catch (err) {
                setError("Failed to fetch product. Please try again later.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProdData();
    }, [id]);

    if (isLoading) return <h2 className="text-center text-lg">Loading...</h2>;
    if (error) return <h2 className="text-red-500 text-center">{error}</h2>;

    return (
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
            {/* Left Side - Product Details (Full width on small screens, 3/4 on large) */}
            <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6 relative">
                {/* Back Button (Sticky for mobile usability) */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-2 left-2 lg:top-4 lg:left-4 flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                    <BsArrowLeft size={20} className="mr-2" /> Back
                </button>

                {product && (
                    <div className="flex flex-col gap-6 mt-10">
                        {/* Product Image */}
                        <div className="w-full flex justify-center">
                            <img
                                src={product.item_image || "https://via.placeholder.com/500"}
                                alt={product.item_name}
                                className="w-full max-w-lg h-auto object-contain rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.item_name}</h2>
                        <p className="text-gray-600">{product.item_description}</p>
                        <p className="text-xl sm:text-2xl font-bold text-blue-600">${product.item_price}</p>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                            <button className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Side - Related Products (Scrollable & full width on mobile) */}
            <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-4 max-h-[600px] overflow-y-auto">
                {relatedProd.length > 0 ? (
                    <RelatedProducts relatedProd={relatedProd} />
                ) : (
                    <p className="text-gray-500 text-center">No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
