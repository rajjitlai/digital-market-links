import { Query } from "appwrite";
import { database } from "../config/appwrite";

export const getContacts = async () => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_CONTACTS_COLLECTION;

        const response = await database.listDocuments(databaseId, collectionId, [
            Query.limit(32),
            Query.orderDesc("$createdAt")
        ]);

        return response.documents;
    } catch (error) {
        console.error("An error occurred", error);
        return [];
    }
};
