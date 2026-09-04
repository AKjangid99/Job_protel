import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { dummyJobs, USE_DUMMY_DATA } from "@/utils/dummyData";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`,
          {
            withCredentials: true,
          }
        );
        console.log("API Response:", res.data);
        if (res.data.status) {
          // Updated success check
          dispatch(setAllJobs(res.data.jobs));
        } else {
          if (USE_DUMMY_DATA) {
            console.warn("API returned no jobs, falling back to dummy data");
            dispatch(setAllJobs(dummyJobs));
          } else {
            setError("Failed to fetch jobs.");
          }
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        if (USE_DUMMY_DATA) {
          console.warn("Using dummy jobs due to API error");
          dispatch(setAllJobs(dummyJobs));
        } else {
          setError(error.message || "An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch]);

  return { loading, error };
};

export default useGetAllJobs;
