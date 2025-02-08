import { database, ID } from "../config/appwrite";
import { Query } from "appwrite";

const databaseId = import.meta.env.VITE_APP_DB
const collectionId = import.meta.env.VITE_APP_SAVED_COLLECTION

export const createSaved = async (userId, productId) => {
    return database.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        { user: userId, product: productId }
    );
};

export const deleteSaved = async (savedId) => {
    return database.deleteDocument(databaseId, collectionId, savedId);
};

export const getUserSavedProducts = async (userId) => {
    const response = await database.listDocuments(databaseId, collectionId, [
        Query.equal("user", userId),
    ]);
    return response.documents;
};
