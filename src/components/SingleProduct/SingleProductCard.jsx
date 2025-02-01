/* eslint-disable react/prop-types */
const SingleProductCard = ({ product }) => {
    if (!product) return null;

    const {
        item_image,
        item_name,
        item_description,
        item_price,
    } = product;

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3 w-full">
                    <img
                        src={item_image || "https://via.placeholder.com/300"}
                        alt={item_name}
                        className="w-full h-60 object-cover rounded-lg"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800">{item_name}</h2>
                    <p className="text-gray-600 mt-2">{item_description}</p>
                    <p className="text-xl font-bold text-blue-600 mt-4">${item_price}</p>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                        <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;
