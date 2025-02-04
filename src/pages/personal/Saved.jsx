import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { database } from "../../config/appwrite";

const Saved = () => {
    const { user, loading: authLoading } = useAuth();
    const [savedProducts, setSavedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedItems = async () => {
            if (!user) return;

            try {
                const databaseId = import.meta.env.VITE_APP_DB;
                const collectionId = import.meta.env.VITE_APP_SAVED_COLLECTION;

                const savedItems = await database.getDocument(databaseId, collectionId, user.$id);

                setSavedProducts(savedItems?.save || []);
            } catch (error) {
                console.error("Error fetching saved items:", error);
                setSavedProducts([]);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchSavedItems();
        }
    }, [user, authLoading]);

    if (authLoading) {
        return <p>Loading user data...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Saved Products</h2>

            {loading ? (
                <p>Loading saved products...</p>
            ) : savedProducts.length === 0 ? (
                <p>No saved products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedProducts.map((product) => (
                        <div key={product.$id} className="bg-gray-700 p-4 rounded-md">
                            <img src={product.item_image} alt={product.item_name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{product.item_name}</h3>
                            <p className="text-gray-400">{product.item_description}</p>
                            <p className="text-green-400 font-bold mt-2">${product.item_price}</p>
                            <a href={product.item_link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">
                                View Product
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Saved;
