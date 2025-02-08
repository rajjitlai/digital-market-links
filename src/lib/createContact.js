import { database, ID } from "../config/appwrite";

export const createContact = async (formData) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_CONTACTS_COLLECTION;
        const documentId = ID.unique();

        const response = await database.createDocument(databaseId, collectionId, documentId, formData);

        return response;
    } catch (error) {
        console.error("An error occurred while creating contact:", error);
        throw error;
    }
};
