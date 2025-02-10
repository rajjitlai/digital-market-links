import { database } from "../config/appwrite";
import toast from "react-hot-toast";

export const updateProdById = async (id, updatedData) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_PROD_COLLECTION;

        const response = await database.updateDocument(databaseId, collectionId, id, updatedData);
        toast.success("Product updated successfully!");
        return response;
    } catch (error) {
        toast.error("Failed to update product");
        console.error("Error updating product:", error);
        throw error;
    }
};
