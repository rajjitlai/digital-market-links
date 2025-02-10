import { database } from "../config/appwrite";

export const updateProdById = async (id, updatedData) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_PROD_COLLECTION;

        const response = await database.updateDocument(databaseId, collectionId, id, updatedData);
        return response;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};
