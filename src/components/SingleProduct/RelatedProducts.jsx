/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RelatedProducts = ({ relatedProd }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h2>
            <div className="flex flex-col gap-4">
                {relatedProd.map((product) => (
                    <Link to={`/product/${product.$id}`} key={product.$id} className="group">
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition">
                            <img
                                src={product.item_image || "https://via.placeholder.com/80"}
                                alt={product.item_name}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition">
                                    {product.item_name}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
