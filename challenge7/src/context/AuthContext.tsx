import { createContext, useState } from "react";
import type { ReactNode } from "react";
import {auth} from "../services/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const login = async (email: string, password: string) => {
        const res = await signInWithEmailAndPassword(auth, email, password);
        setUser(res.user);
    };
    const register = async (email: string, password: string) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        setUser(res.user);
    };
    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
