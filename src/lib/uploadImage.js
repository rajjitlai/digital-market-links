import { prodBuck, ID } from "../config/appwrite";

export const uploadImage = async (file) => {
    try {
        const buckId = import.meta.env.VITE_APP_PROD_BUCK;
        const fileResponse = await prodBuck.createFile(buckId, ID.unique(), file);
        const imageId = fileResponse.$id;
        const imageUrl = prodBuck.getFileView(buckId, imageId);

        console.log("Image uploaded successfully:", imageUrl);
        return imageUrl;
    } catch (error) {
        console.error("An error occurred while uploading image:", error);
        return null;
    }
};
