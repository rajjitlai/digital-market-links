/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { account, database, ID } from "../config/appwrite";
import toast from "react-hot-toast";
import { getUserProfile } from "../lib/getUser";

const AuthContext = createContext();

const databaseId = import.meta.env.VITE_APP_DB
const userCollectionId = import.meta.env.VITE_APP_USERS_COLLECTION

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const session = await account.get();
                if (!session?.$id) throw new Error("No active session");

                const userProfile = await getUserProfile(session.$id);
                setUser({ id: session.$id, email: session.email, ...userProfile });
            } catch (error) {
                console.error("Error fetching session:", error.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const registerUser = async (userInfo) => {
        try {
            const userId = ID.unique();
            await account.create(userId, userInfo.email, userInfo.password, userInfo.username);
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);

            await database.createDocument(databaseId, userCollectionId, userId, {
                username: userInfo.username,
                email: userInfo.email,
                save: []
            });

            await account.createVerification(`${window.location.origin}/verify-email`);
            toast.success("User registered successfully! Please check your email to verify your account.");
            await account.deleteSession("current");
            window.location.href = "/verify-prompt";
        } catch (error) {
            toast.error(error.message || "Error registering user.");
            console.error(error);
        }
    };

    const loginUser = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);

            const userDetails = await account.get();
            if (userDetails.emailVerification) {
                toast.success("Login successful!");
                setUser(userDetails);
                window.location.reload();
            } else {
                toast.error("Please verify your email to continue.");
                await account.deleteSession("current");
            }
        } catch (error) {
            toast.error(`Login failed: ${error.message}`);
            console.error(error);
        }
    };

    const logoutUser = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            toast.success("Successfully logged out!");
        } catch (error) {
            toast.error("Error logging out: " + error.message);
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
