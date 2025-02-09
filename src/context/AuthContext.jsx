/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../config/appwrite";
import { getUserProfile } from "../lib/getUser";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
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
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const session = await account.get();
            if (!session?.$id) throw new Error("User session ID is missing after login");

            const userProfile = await getUserProfile(session.$id);
            setUser({ id: session.$id, email: session.email, ...userProfile });

            const params = new URLSearchParams(window.location.search);
            const redirectPath = params.get("redirect") || "/";
            window.location.href = redirectPath;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const signup = async (email, password, name) => {
        await account.create("unique()", email, password, name);
        await login(email, password);
    };

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
        window.location.href = "/login";
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
