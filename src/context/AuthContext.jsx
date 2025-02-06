import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../config/appwrite";
import { getUserProfile } from "../lib/getUser";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const session = await account.get();

                if (!session?.$id) {
                    console.error("User session ID is missing!");
                    setUser(null);
                    return;
                }

                const userProfile = await getUserProfile(session.$id);
                if (userProfile) {
                    setUser({ id: session.$id, email: session.email, ...userProfile });
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Auth error:", error);
                setUser(null);
            }
        }
        checkUser();
    }, []);

    const login = async (email, password) => {
        await account.createEmailPasswordSession(email, password);
        const session = await account.get();

        if (!session?.$id) {
            console.error("User session ID is missing after login!");
            return;
        }

        const userProfile = await getUserProfile(session.$id);
        if (userProfile) {
            setUser({ id: session.$id, email: session.email, ...userProfile });
        } else {
            setUser(null);
        }
    };

    const signup = async (email, password, name) => {
        await account.create("unique()", email, password, name);
        await login(email, password);
    };

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
