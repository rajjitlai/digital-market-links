import { account, database } from '../config/appwrite';
import { ID } from 'appwrite';
import toast from 'react-hot-toast';

const DATABASE_ID = import.meta.env.VITE_APP_DB
const USER_COLLECTION_ID = import.meta.env.VITE_APP_USERS_COLLECTION

export const registerUser = async (userInfo) => {
    try {
        const user = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username);

        await account.createEmailPasswordSession(userInfo.email, userInfo.password);

        await database.createDocument(DATABASE_ID, USER_COLLECTION_ID, user.$id, {
            username: userInfo.username,
            email: userInfo.email,
            saved: []
        });

        await account.createVerification(`${window.location.origin}/verify-email`);
        toast.success("User registered successfully! Please check your email to verify your account.");
    } catch (error) {
        toast.error(error.message || "Error registering user.");
        console.error(error);
    }
};

export const loginUser = async (email, password, navigate) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log("Logged in:", session);

        const userDetails = await account.get();
        if (userDetails.emailVerification) {
            toast.success('Login successful!');
            navigate("/");
        } else {
            toast.error('Please verify your email to continue.');
            await account.deleteSession('current');
        }
    } catch (error) {
        toast.error(`Login failed: ${error.message}`);
        console.error(error);
    }
};

export const logoutUser = async (navigate) => {
    try {
        await account.deleteSession('current');
        toast.success("Successfully logged out!");
        navigate("/login");
    } catch (error) {
        toast.error("Error logging out: " + error.message);
        console.error(error);
    }
};
