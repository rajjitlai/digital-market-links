import { database, ID } from "../config/appwrite";

export const addProduct = async (prodData) => {
    try {
        const databaseId = import.meta.env.VITE_APP_DB;
        const collectionId = import.meta.env.VITE_APP_PROD_COLLECTION;
        const documentId = ID.unique();

        const response = await database.createDocument(databaseId, collectionId, documentId, {
            item_name: prodData.item_name,
            item_description: prodData.item_description,
            item_image: prodData.item_image,
            item_price: parseFloat(prodData.item_price),
            item_link: prodData.item_link,
            tags: prodData.tags || [],
        });

        return response;
    } catch (error) {
        console.error("An error occurred while adding a new product:", error);
        throw error;
    }
};
