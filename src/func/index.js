import { account } from '../config/appwrite';
import toast from 'react-hot-toast';

export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
        toast.success("Successfully logged out!");
    } catch (error) {
        toast.error("Error logging out: " + error.message);
        console.error(error);
    }
};
