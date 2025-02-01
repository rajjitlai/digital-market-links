import { Link } from "react-router-dom";

const RelatedProducts = ({ relatedProd }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProd.map((product) => (
                    <Link to={`/product/${product.$id}`} key={product.$id}>
                        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                            <img
                                src={product.item_image || "https://via.placeholder.com/200"}
                                alt={product.item_name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mt-3">
                                {product.item_name}
                            </h3>
                            <p className="text-blue-600 font-bold mt-2">${product.item_price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
