import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { connectSocialAccountReducer } from "./connection/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    socialAccount: connectSocialAccountReducer,
  },
});

// Step	File	Purpose
// 1️⃣	authActionTypes.js	Defines action type constants
// 2️⃣	authApi.js	Handles API requests (Axios)
// 3️⃣	authActions.js	Defines Redux actions that call APIs
// 4️⃣	authReducer.js	Updates state based on actions
// 5️⃣	store.js	Configures and exports Redux store
// 6️⃣	Login.js	React component that dispatches actions and reads state

// 🔥 Summary of Redux Flow
// Step	Action	What Happens?
// 1️⃣ UI Interaction	User clicks "Login"	Calls dispatch(loginUser())
// 2️⃣ Action Dispatch	authActions.js	Dispatches LOGIN_USER_REQUEST
// 3️⃣ API Call	authApi.js	Calls backend API for authentication
// 4️⃣ Reducer Updates	authReducer.js	Updates user, loading, isAuthenticated
// 5️⃣ Store Holds State	store.js	Keeps global authentication state
// 6️⃣ UI Re-Renders	React Component	Displays user info or error
