import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../config/appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const session = await account.get();
                setUser(session);
            } catch {
                setUser(null);
            }
        };
        checkUser();
    }, []);

    const login = async (email, password) => {
        await account.createEmailSession(email, password);
        setUser(await account.get());
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
