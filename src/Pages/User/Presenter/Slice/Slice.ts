import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../Redux/Store";
import { UserSliceType } from "../Type/Type";

const initialState: UserSliceType = {
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

// export state

// export const loading = (state: RootState) => state.user.loading;

export const { setLoading } = userSlice.actions;

export default userSlice.reducer;
