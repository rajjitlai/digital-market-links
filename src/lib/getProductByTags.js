import { database } from "../config/appwrite";
import { Query } from "appwrite";

export const getProdByTags = async (tags) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_PROD_COLLECTION;

        const response = await database.listDocuments(databaseId, collectionId, [
            Query.contains("tags", tags),
        ]);

        return response.documents;
    } catch (error) {
        console.error("An error occurred while fetching related products:", error);
        return [];
    }
};
