import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || state.job?.allJobs || []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-[#6A38C2] to-[#FA4F09] bg-clip-text text-transparent">Latest & Top</span> openings
          </h2>
          <p className="mt-2 text-sm text-gray-500">Hand-picked roles updated daily — apply before they close.</p>
        </div>
        <Link to="/Jobs" className="shrink-0">
          <Button variant="outline" className="rounded-full">
            View all jobs <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-6">
        {allJobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-10 text-center">
            <p className="text-sm font-medium text-gray-600">No jobs available right now</p>
            <p className="text-xs text-gray-500 mt-1">Check back soon — new roles are added every hour.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {allJobs.slice(0, 6).map((job) =>
              job?._id ? <JobCards key={job._id} job={job} /> : null
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestJobs;
