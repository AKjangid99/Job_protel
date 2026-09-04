import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { setAllJobs, setAllAppliedJobs, setAllAdminJobs, setSingleJob } from "@/redux/jobSlice";
import { setCompanies } from "@/redux/companyslice";
import { setAllApplicants } from "@/redux/applicationSlice";
import { dummyUser, dummyJobs, dummyAppliedJobs, dummyCompanies, dummyApplicants, dummyAdminJobs, dummySingleJob, USE_DUMMY_DATA } from "@/utils/dummyData";

// Invisible initializer — seeds dummy data once if persisted state is empty.
// No UI box. Controlled by VITE_USE_DUMMY_DATA (default true).
const DummyInitializer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  const { allJobs } = useSelector((s) => s.job || {});
  const { companies } = useSelector((s) => s.company || {});

  useEffect(() => {
    if (!USE_DUMMY_DATA) return;
    const jobsEmpty = !allJobs || allJobs.length === 0;
    const companiesEmpty = !companies || companies.length === 0;
    if (jobsEmpty && companiesEmpty) {
      dispatch(setAllJobs(dummyJobs));
      dispatch(setAllAdminJobs(dummyAdminJobs));
      dispatch(setAllAppliedJobs(dummyAppliedJobs));
      dispatch(setCompanies(dummyCompanies));
      dispatch(setAllApplicants(dummyApplicants));
      dispatch(setSingleJob(dummySingleJob));
      if (!user) dispatch(setUser(dummyUser));
    }
  }, []); // run once on mount

  return null;
};

export default DummyInitializer;
