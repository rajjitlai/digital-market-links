/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { account, ID } from "../config/appwrite";
import { getUserProfile } from "../lib/getUser";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigateTo = (path) => {
        if (typeof window !== "undefined") {
            window.location.href = path;
        }
    };

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

    const signup = async (email, password, name) => {
        try {
            const newUser = await account.create(ID.unique(), email, password, name);
            await account.createVerification(newUser.$id, `${window.location.origin}/verify-email`);
            toast.success("Signup successful! Please verify your email.");
        } catch (error) {
            console.error("Signup failed:", error.message);
            toast.error("Signup failed. Please try again.");
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const session = await account.get();
            if (!session?.$id) throw new Error("User session ID is missing after login");

            const userProfile = await getUserProfile(session.$id);
            setUser({ id: session.$id, email: session.email, ...userProfile });

            const params = new URLSearchParams(window.location.search);
            const redirectPath = params.get("redirect") || "/";
            navigateTo(redirectPath); // Use the fallback function
        } catch (error) {
            console.error("Login failed:", error.message);
            toast.error("Login failed. Please check your credentials.");
            throw error;
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            navigateTo("/login"); // Use the fallback function
        } catch (error) {
            console.error("Logout failed:", error.message);
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
