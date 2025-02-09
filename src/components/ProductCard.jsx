/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { createSaved, deleteSaved, getUserSavedProducts } from "../lib/createSaved";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, title, desc, price, tags = [] }) => {
    const { user } = useAuth();
    const [savedProductId, setSavedProductId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchSavedStatus = async () => {
            try {
                const savedProducts = await getUserSavedProducts(user.$id);

                const savedItem = savedProducts.find((product) => product.product === id);
                setSavedProductId(savedItem ? savedItem.$id : null);
            } catch (error) {
                console.error("Error fetching saved products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedStatus();
    }, [user, id]);

    const handleBookmark = async (e) => {
        e.stopPropagation();
        if (!user) {
            console.error("User not authenticated. Cannot save product.");
            return;
        }

        try {
            if (savedProductId) {
                await deleteSaved(savedProductId);
                setSavedProductId(null);
                console.log("Product removed from saved list!");
            } else {
                const savedItem = await createSaved(user.$id, id);
                setSavedProductId(savedItem.$id);
                console.log("Product saved successfully!");
            }
        } catch (error) {
            console.error("Failed to update saved products:", error);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg max-w-[300px] shadow-md hover:shadow-lg transition-all p-4 relative">
            {!loading && user && (
                <button
                    className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-primary transition"
                    onClick={handleBookmark}
                >
                    {savedProductId ? <BsBookmarkFill className="text-blue-500" /> : <BsBookmark />}
                </button>
            )}

            <Link to={`/product/${id}`} className="block">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-[250px] object-cover rounded-lg"
                />
                <div className="space-y-2 pt-4 text-center">
                    <h2 className="text-primary font-semibold uppercase">{title}</h2>
                    <p className="text-gray-500 text-sm max-w-[200px] mx-auto">{desc}</p>
                    <div className="font-bold text-lg text-primary">${price}</div>
                    <div className="text-gray-500 text-sm">
                        {tags.map((tag, index) => (
                            <span key={index} className="mr-2">#{tag.trim()}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
