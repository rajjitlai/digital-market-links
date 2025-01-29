import { account } from '../config/appwrite';
import { ID } from 'appwrite';
import toast from 'react-hot-toast';

export const registerUser = async (userInfo) => {
    try {
        await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username);
        await account.createEmailPasswordSession(userInfo.email, userInfo.password);
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
