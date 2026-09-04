import { createSlice } from "@reduxjs/toolkit";
import { dummyJobs, dummyAppliedJobs, dummySingleJob, dummyAdminJobs, USE_DUMMY_DATA } from "@/utils/dummyData";

const initialState = {
  allJobs: USE_DUMMY_DATA ? dummyJobs : [],
  allAdminJobs: USE_DUMMY_DATA ? dummyAdminJobs : [], // This will hold
  singleJob: USE_DUMMY_DATA ? dummySingleJob : null, // This will hold the job details when a user clicks on a job
  searchJobByText: "",
  allAppliedJobs: USE_DUMMY_DATA ? dummyAppliedJobs : [], // This will hold
  searchedQuery: "",
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload; // Update state with fetched jobs
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload; // Update state with fetched job details
    },
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload; // Update state with fetched admin jobs
    },
    setSearchJobByText(state, action) {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;
export default jobSlice.reducer;
