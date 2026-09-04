import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Bookmark } from "lucide-react";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  const daysAgo = (iso) => {
    if (!iso) return "New";
    const diff = Date.now() - new Date(iso).getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (d <= 0) return "Today";
    if (d === 1) return "1 day ago";
    return `${d} days ago`;
  };

  const companyName = job?.company?.name || job?.name || "Top Company";
  const logo = job?.company?.logo;

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-xl hover:shadow-violet-100/60 hover:border-violet-200 hover:-translate-y-0.5 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 min-w-0">
          <div className="h-11 w-11 rounded-xl border border-gray-100 bg-white flex items-center justify-center overflow-hidden shrink-0">
            {logo ? <img src={logo} alt={companyName} className="h-7 w-auto object-contain" /> : <span className="text-sm font-bold text-violet-600">{companyName[0]}</span>}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{companyName}</p>
            <p className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="h-3 w-3" /> {job?.location || "India"} • <Clock className="h-3 w-3" /> {daysAgo(job?.createdAt)}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-200 shrink-0"
        >
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-4 text-[15px] font-bold leading-tight text-gray-900 group-hover:text-violet-700 line-clamp-1">{job?.title}</h3>
      <p className="mt-1.5 text-[13px] leading-5 text-gray-600 line-clamp-2 min-h-[40px]">{job?.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 border border-blue-100 font-medium">
          {job?.position || 1} positions
        </Badge>
        <Badge variant="secondary" className="bg-violet-50 text-violet-700 hover:bg-violet-50 border border-violet-100 font-medium">
          {job?.location}
        </Badge>
        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border border-emerald-100 font-medium">
          {job?.salary} LPA
        </Badge>
        <Badge variant="outline" className="font-medium">
          {job?.jobType}
        </Badge>
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-50">
        <span className="text-xs font-medium text-gray-500">Be an early applicant</span>
        <span className="text-xs font-semibold text-violet-600 group-hover:gap-1 flex items-center">View details →</span>
      </div>
    </div>
  );
};

export default JobCards;
