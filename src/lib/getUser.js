import { database } from "../config/appwrite";

const DATABASE_ID = import.meta.env.VITE_APP_DB;
const USER_COLLECTION_ID = import.meta.env.VITE_APP_USERS_COLLECTION;

export const getUserProfile = async (userId) => {
    if (!userId) {
        console.error("getUserProfile Error: userId is undefined!");
        return null;
    }

    try {
        const user = await database.getDocument(DATABASE_ID, USER_COLLECTION_ID, userId);
        return user;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};
