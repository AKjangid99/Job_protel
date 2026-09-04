import { createSlice } from "@reduxjs/toolkit";
import { dummyCompanies, USE_DUMMY_DATA } from "@/utils/dummyData";
const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: USE_DUMMY_DATA ? dummyCompanies[0] : {}, // Initialize with an empty object
    companies: USE_DUMMY_DATA ? dummyCompanies : [],
    searchCompanyByText: "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

export const { setSingleCompany, setCompanies,  setSearchCompanyByText } = companySlice.actions;

export default companySlice.reducer;

export { companySlice };
