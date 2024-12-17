import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, fetchCurrentUser } from "../../../store/authSlice";
import { RootState } from "@reduxjs/toolkit/query";

type AuthContextType = {
    authToken?: string | null;
    currentUser?: { username: string; role: string } | null;
    handleLogin: (username: string, password: string) => Promise<void>;
    handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = React.PropsWithChildren<{}>;

const AuthProvider = ({ children }: AuthProviderProps) => {
    const dispatch = useDispatch();
    const { isAuthenticated, role, username } = useSelector(
        (state: RootState) => state.auth
    );

    // Загружаем пользователя из токена при старте
    useEffect(() => {
        const token = getCookie("token");
        if (token) {
            dispatch(fetchCurrentUser()).catch(() => {
                console.error("Не удалось загрузить пользователя");
            });
        }
    }, [dispatch]);


    async function handleLogin(credentials: { username: string; password: string }) {
        await dispatch(login(credentials)).unwrap();
    }

    async function handleLogout() {
        await dispatch(logout());
        document.cookie = "token=; path=/; max-age=0;"; // Удаляем токен из cookies при логауте
    }

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                return decodeURIComponent(value);
            }
        }
        return null;
    };


    return (
        <AuthContext.Provider
            value={{
                authToken: isAuthenticated ? getCookie("token") : null,
                currentUser: isAuthenticated ? { username, role } : null,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default AuthProvider;
