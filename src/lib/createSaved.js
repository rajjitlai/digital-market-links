import { database, ID } from "../config/appwrite";

export const createSaved = async (data) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_SAVED_COLLECTION;
        const documentId = ID.unique();

        if (!data.userId) {
            throw new Error("User ID is required to save the product.");
        }

        const response = await database.createDocument(databaseId, collectionId, documentId, data);

        return response;
    } catch (error) {
        console.error("An error occurred while saving the product:", error);
        throw error;
    }
};
