import { database } from "../config/appwrite";

export const deleteProdById = async (id) => {
    try {

        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_PROD_COLLECTION

        const response = await database.deleteDocument(databaseId, collectionId, id)
        return response
    } catch (error) {
        console.error("An error occurred", error)
        throw error;
    }
}
