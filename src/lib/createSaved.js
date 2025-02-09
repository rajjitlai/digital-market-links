import { database, ID } from "../config/appwrite";
import { Query } from "appwrite";

const databaseId = import.meta.env.VITE_APP_DB;
const collectionId = import.meta.env.VITE_APP_SAVED_COLLECTION;

export const savePost = async (postId, userId) => {
    try {
        // Check if post is already saved
        const existing = await database.listDocuments(databaseId, collectionId, [
            Query.equal("user", userId),
            Query.equal("product", postId)
        ]);

        if (existing.documents.length > 0) {
            console.warn("Product already saved!");
            return existing.documents[0];  // Avoid duplicate save
        }

        // Save the post
        const savedPost = await database.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            { user: userId, product: postId }
        );

        return savedPost;
    } catch (error) {
        console.error("Error saving product:", error);
    }
};

export const deleteSavedPost = async (savedRecordId) => {
    try {
        await database.deleteDocument(databaseId, collectionId, savedRecordId);
        return { status: 'ok' };
    } catch (error) {
        console.error("Error deleting saved product:", error);
    }
};

export const getUserSavedProducts = async (userId) => {
    try {
        const response = await database.listDocuments(databaseId, collectionId, [
            Query.equal("user", userId),
        ]);
        return response.documents;
    } catch (error) {
        console.error("Error fetching saved products:", error);
        return [];
    }
};
