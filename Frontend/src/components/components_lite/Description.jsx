import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { dummyJobs, dummySingleJob, USE_DUMMY_DATA } from "@/utils/dummyData";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  IndianRupee,
  Users,
  CalendarDays,
  BadgeCheck,
  Clock,
  Building2,
  CheckCircle2,
} from "lucide-react";

const Description = () => {
  const params = useParams();
  const jobId = params.id;

  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.auth);

  const isIntiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        console.log(res.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          if (USE_DUMMY_DATA) {
            const fallback = dummyJobs.find((j) => j._id === jobId) || dummySingleJob;
            dispatch(setSingleJob(fallback));
          } else {
            setError("Failed to fetch jobs.");
          }
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        if (USE_DUMMY_DATA) {
          const fallback = dummyJobs.find((j) => j._id === jobId) || dummySingleJob;
          dispatch(setSingleJob(fallback));
        } else {
          setError(error.message || "An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);
  console.log("single jobs", singleJob);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto my-10 px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-40 bg-gray-200 rounded-2xl" />
          <div className="h-24 bg-gray-200 rounded-2xl" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto my-20 px-4 text-center text-gray-600">
        <p className="text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (!singleJob) {
    return (
      <div className="max-w-5xl mx-auto my-20 px-4 text-center text-gray-500">
        No job found.
      </div>
    );
  }

  const details = [
    {
      icon: Briefcase,
      label: "Role",
      value: `${singleJob?.position} Open Positions`,
    },
    { icon: MapPin, label: "Location", value: singleJob?.location },
    { icon: IndianRupee, label: "Salary", value: `${singleJob?.salary} LPA` },
    {
      icon: Clock,
      label: "Experience",
      value: `${singleJob?.experienceLevel} Year`,
    },
    {
      icon: Users,
      label: "Total Applicants",
      value: singleJob?.applications?.length ?? 0,
    },
    { icon: BadgeCheck, label: "Job Type", value: singleJob?.jobType },
    {
      icon: CalendarDays,
      label: "Posted On",
      value: singleJob?.createdAt?.split("T")[0],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto py-10 px-4"
      >
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#6B3AC2]/10 text-[#6B3AC2]">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
                  {singleJob?.title}
                </h1>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 font-semibold rounded-full">
                    {singleJob?.position} Positions
                  </Badge>
                  <Badge className="bg-orange-50 text-[#FA4F09] hover:bg-orange-50 font-semibold rounded-full">
                    {singleJob?.salary} LPA
                  </Badge>
                  <Badge className="bg-purple-50 text-[#6B3AC2] hover:bg-purple-50 font-semibold rounded-full">
                    {singleJob?.location}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 font-semibold rounded-full">
                    {singleJob?.jobType}
                  </Badge>
                </div>
              </div>
            </div>

            <Button
              onClick={isApplied ? null : applyJobHandler}
              disabled={isApplied}
              className={`rounded-lg px-6 py-2.5 font-semibold transition-all shrink-0 ${
                isApplied
                  ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                  : "bg-[#6B3AC2] hover:bg-[#552d9b] shadow-md hover:shadow-lg"
              }`}
            >
              {isApplied ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Already Applied
                </span>
              ) : (
                "Apply Now"
              )}
            </Button>
          </div>
        </div>

        {/* Job details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:shadow-md hover:border-[#6B3AC2]/30 transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6B3AC2]/10 text-[#6B3AC2]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-400 font-medium">
                  {label}
                </p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-6">
          <h2 className="font-bold text-lg text-gray-900 mb-3">
            Job Description
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {singleJob?.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Description;
