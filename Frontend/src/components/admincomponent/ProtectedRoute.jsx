 
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USE_DUMMY_DATA } from "@/utils/dummyData";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "Recruiter") {
      // In dummy/screenshot mode, don't hard redirect — let user toggle via banner
      if (USE_DUMMY_DATA) {
        console.warn("ProtectedRoute: dummy mode active — use banner to switch to Recruiter");
        return;
      }
      navigate("/");  
    }
  }, [user, navigate]);   
  
  if (!user || user.role !== "Recruiter") {
    if (USE_DUMMY_DATA) {
      // Show children with a hint instead of blank for screenshots
      return (
        <>
          <div className="bg-amber-100 text-amber-800 text-center py-2 text-sm">
            Screenshot mode: you are viewing as <b>{user?.role || "Guest"}</b> — click <b>Recruiter</b> in the Dummy Data banner (bottom-right) to see admin content without redirect.
          </div>
          {children}
        </>
      );
    }
    return null;   
  }

  return <>{children}</>;   
};

export default ProtectedRoute;
