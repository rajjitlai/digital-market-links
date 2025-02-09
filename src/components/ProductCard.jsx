/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { savePost, deleteSavedPost, getUserSavedProducts } from "../lib/createSaved";
import { useAuth } from "../context/AuthContext"; // Get user from AuthContext

const ProductCard = ({ id, img, title, desc, price, tags = [] }) => {
    const { user } = useAuth(); // Get authenticated user
    const userId = user?.$id;

    const [isSaved, setIsSaved] = useState(false);
    const [savedRecordId, setSavedRecordId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedStatus = async () => {
            if (!userId) {
                setLoading(false);
                return;
            }

            try {
                console.log("Fetching saved products for user:", userId);
                const savedProducts = await getUserSavedProducts(userId);
                console.log("Saved products:", savedProducts);

                const savedItem = savedProducts.find(record => record.product?.$id === id);

                if (savedItem) {
                    console.log("Product is saved:", id);
                    setIsSaved(true);
                    setSavedRecordId(savedItem.$id);
                } else {
                    console.log("Product is not saved:", id);
                    setIsSaved(false);
                    setSavedRecordId(null);
                }
            } catch (error) {
                console.error("Error fetching saved status:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSavedStatus();
    }, [id, userId]);

    const handleSavePost = async (e) => {
        e.stopPropagation();

        if (!userId) {
            console.log("User not logged in");
            return;
        }

        try {
            if (isSaved && savedRecordId) {
                console.log("Deleting saved post:", savedRecordId);
                await deleteSavedPost(savedRecordId);
                setIsSaved(false);
                setSavedRecordId(null);
            } else {
                console.log("Saving post:", id);
                const savedPost = await savePost(id, userId);
                if (savedPost) {
                    setIsSaved(true);
                    setSavedRecordId(savedPost.$id);
                }
            }
        } catch (error) {
            console.error("Error saving/deleting post:", error);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg max-w-[300px] shadow-md hover:shadow-lg transition-all p-4 relative">
            {userId && !loading && (
                <button
                    className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-primary transition z-50"
                    onClick={handleSavePost}
                >
                    {isSaved ? <BsBookmarkFill className="text-blue-500" /> : <BsBookmark />}
                </button>
            )}

            <Link to={`/product/${id}`} className="block">
                <img src={img} alt={title} className="w-full h-[250px] object-cover rounded-lg" />
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
