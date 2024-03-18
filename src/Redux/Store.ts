import { configureStore } from "@reduxjs/toolkit";

// Reducer

import userReducer from "../Pages/Auth/Login/Presenter/Slice/Slice";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
