import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}/api/auth/signUp`, userData, { withCredentials: true });
            return response.data; // Успешная регистрация возвращает данные пользователя
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Registration failed");
        }
    }
);

export const login = createAsyncThunk(
    "auth/authorization",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}/api/auth/signIn`, credentials, { withCredentials: true });
            return response.data; // Данные с токеном и ролями
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true });
            return true;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Logout failed");
        }
    }
);


// Глобально включаем отправку куки
axios.defaults.withCredentials = true;

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${baseUrl}/api/auth/me`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось получить пользователя");
        }
    }
);



const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        role: null,
        username: null,
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Логин
            .addCase(login.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isAuthenticated = true;
                state.role = action.payload.roles[0];
                state.username = action.payload.username;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "Something went wrong";
            })
            // Логаут
            .addCase(logout.pending, (state) => {
                state.status = "loading";
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = "succeeded";
                state.isAuthenticated = false;
                state.role = null;
                state.username = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "Logout failed";
            })
            // Получение текущего пользователя
            .addCase(fetchCurrentUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isAuthenticated = true;
                state.role = action.payload.roles?.[0]; // Сохраняем первую роль
                state.username = action.payload.username; // Сохраняем имя пользователя
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.status = "failed";
                state.isAuthenticated = false;
                state.role = null;
                state.username = null;
                state.error = action.payload || "Failed to fetch user";
            })
            // Регистрация
            .addCase(register.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isAuthenticated = true;
                state.username = action.payload.username;
                state.role = action.payload.roles[0];
            })
            .addCase(register.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "Registration failed";
            });
    },
});

export const selectAuth = (state) => state.auth.isAuthenticated;
export const selectRole = (state) => state.auth.role;
export const selectUsername = (state) => state.auth.username;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthStatus = (state) => state.auth.status;

export default authSlice.reducer;
