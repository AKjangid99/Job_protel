import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import { dummyAppliedJobs, USE_DUMMY_DATA } from "@/utils/dummyData";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.success) {
          dispatch(setAllAppliedJobs(res.data.application));
        } else if (USE_DUMMY_DATA) {
          dispatch(setAllAppliedJobs(dummyAppliedJobs));
        }
      } catch (error) {
        console.error(error);
        if (USE_DUMMY_DATA) {
          dispatch(setAllAppliedJobs(dummyAppliedJobs));
        }
      }
    };
    fetchAppliedJobs();
  }, [dispatch]);
  return null;
};

export default useGetAppliedJobs;
