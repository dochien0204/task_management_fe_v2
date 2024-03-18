import { createSlice } from "@reduxjs/toolkit";
import { RoleCode } from "../../../../../Common/Constant";
import { RootState } from "../../../../../Redux/Store";
import { User, UserSliceType } from "../Type/Type";

const initialState: UserSliceType = {
  data: {} as User,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// export state

export const userData = (state: RootState) => state.user.data;

export const userRole = (state: RootState) => ({
  isSystemAdmin: state.user.data.role?.code === RoleCode.SYSTEM_ADMIN,
  isCompanyAdmin: state.user.data.role?.code === RoleCode.COMPANY_ADMIN,
  isUser: state.user.data.role?.code === RoleCode.USER,
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
