import { setCompanies } from "@/redux/companyslice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { dummyCompanies, USE_DUMMY_DATA } from "@/utils/dummyData";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        } else if (USE_DUMMY_DATA) {
          dispatch(setCompanies(dummyCompanies));
        }
      } catch (error) {
        console.log(error);
        if (USE_DUMMY_DATA) {
          dispatch(setCompanies(dummyCompanies));
        }
      }
    };
    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
