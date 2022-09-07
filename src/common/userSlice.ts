import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../interface/user';


interface UserState {
    user: User | null,
    loading: boolean;
    errors: any;
}

const initialState: UserState = {
    user: null,
    loading: false,
    errors: []
}


export const currentUser = createAsyncThunk<User, Object>(
    "auth/whoami",
    async (data, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:3000/auth/whoami", data);
            console.log(response)
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const signUp = createAsyncThunk<User, Object>(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/signup", data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
export const signIn = createAsyncThunk<User, Object>(
    "auth/signin",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/signin", data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
export const logOut = createAsyncThunk<User, Object>(
    "auth/signout",
    async (_, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/signout");
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        currentuser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        signup: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        signin: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
})

export default userSlice.reducer;
export const { signup, signin, logout } = userSlice.actions;
