import { setSingleCompany } from "@/redux/companyslice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { dummyCompanies, USE_DUMMY_DATA } from "@/utils/dummyData";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyId}`,
          { withCredentials: true }
        );
        dispatch(setSingleCompany(res.data.company));
      } catch (error) {
        console.error("Error fetching company:", error);
        if (USE_DUMMY_DATA) {
          const fallback = dummyCompanies.find((c) => c._id === companyId) || dummyCompanies[0];
          dispatch(setSingleCompany(fallback));
        }
      }
    };

    if (companyId) {
      fetchSingleCompany();
    }
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
