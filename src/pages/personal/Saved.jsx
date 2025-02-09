import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { deleteSavedPost, getUserSavedProducts } from "../../lib/createSaved";

const Saved = () => {
    const { user, loading: authLoading } = useAuth();
    const [saved, setSaved] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedItems = async () => {
            if (!user) return;

            try {
                const savedItems = await getUserSavedProducts(user.$id);
                setSaved(savedItems || []);
            } catch (error) {
                console.error("Error fetching saved items:", error);
                setSaved([]);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchSavedItems();
        }
    }, [user, authLoading]);

    const deleteSave = async (id) => {
        try {
            await deleteSavedPost(id);
            setSaved(saved.filter((item) => item.$id !== id));
        } catch (error) {
            console.error("Error deleting saved product:", error);
        }
    };

    const truncateDescription = (desc, length = 100) => {
        return desc.length > length ? `${desc.substring(0, length)}...` : desc;
    };

    if (authLoading) {
        return <p className="text-center text-gray-500">Loading user data...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Saved Products</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading saved products...</p>
            ) : saved.length === 0 ? (
                <p className="text-center text-gray-500">No saved products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {saved.map((product) => {
                        const productData = product.product;

                        if (!productData || !productData.item_image) {
                            return <p key={product.$id} className="text-red-500">Invalid product data</p>;
                        }

                        return (
                            <div key={product.$id} className="bg-white p-5 rounded-lg shadow-md border hover:shadow-lg transition-all">
                                <img
                                    src={productData.item_image}
                                    alt={productData.item_name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{productData.item_name}</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {truncateDescription(productData.item_description)}
                                </p>

                                <div className="flex justify-between">
                                    <a
                                        href={`/product/${productData.$id}`}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
                                    >
                                        View
                                    </a>
                                    <button
                                        onClick={() => deleteSave(product.$id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Back Button */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Saved;
