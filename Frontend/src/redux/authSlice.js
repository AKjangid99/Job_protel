import { createSlice } from "@reduxjs/toolkit";
import { dummyUser, USE_DUMMY_DATA } from "@/utils/dummyData";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: USE_DUMMY_DATA ? dummyUser : null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export the actions
export const { setLoading, setUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Export the authSlice if needed
export const authSliceReducer = authSlice.reducer;
