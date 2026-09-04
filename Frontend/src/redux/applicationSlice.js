import { createSlice } from "@reduxjs/toolkit";
import { dummyApplicants, USE_DUMMY_DATA } from "@/utils/dummyData";

const applicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants: USE_DUMMY_DATA ? dummyApplicants : null,
    },
    reducers:{
        setAllApplicants:(state,action) => {
            state.applicants = action.payload;
        }
    }
});

export const {setAllApplicants} = applicationSlice.actions;
export default applicationSlice.reducer;
export const applicationReducer = applicationSlice.reducer;
