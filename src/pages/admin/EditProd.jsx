import { useEffect, useState } from "react";
import { getProd } from "../../lib/getProd";
import { deleteProdById } from "../../lib/deleteProdById";
import toast from "react-hot-toast";
import EditProdById from "./EditProdById";

const EditProd = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const fetchProducts = async () => {
        try {
            const prodList = await getProd();
            setProducts(prodList);
        } catch (error) {
            toast.error("Error fetching products");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProdById(id);
            toast.success("Product deleted successfully");
            fetchProducts();
        } catch (error) {
            toast.error("Failed to delete product");
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Product Name</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.$id} className="border">
                                <td className="border p-2 font-bold text-center">{product.item_name}</td>
                                <td className="border p-2 flex gap-2 items-center justify-center">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={() => setSelectedProductId(product.$id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleDelete(product.$id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center p-4">No products found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Popup for Editing Product */}
            {selectedProductId && (
                <EditProdById
                    productId={selectedProductId}
                    onClose={() => setSelectedProductId(null)}
                />
            )}
        </div>
    );
};

export default EditProd;
