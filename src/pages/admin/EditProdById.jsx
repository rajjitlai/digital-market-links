/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getProdById } from "../../lib/getProdById";
import { updateProdById } from "../../lib/updateProdById";
import toast from "react-hot-toast";

const EditProdById = ({ productId, onClose }) => {
    const [product, setProduct] = useState({ name: "" });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProdById(productId);
                setProduct(data);
            } catch (error) {
                toast.error("Failed to fetch product");
                console.error(error);
            }
        };

        if (productId) fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProdById(productId, product);
            toast.success("Product updated successfully");
            onClose(); // Close the modal
        } catch (error) {
            toast.error("Failed to update product");
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProdById;
