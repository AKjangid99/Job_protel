import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search, Briefcase, Users, Building2, TrendingUp, Sparkles } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const quickTags = ["Frontend", "Backend", "Data Science", "Remote", "Product"];

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") searchjobHandler();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#faf5ff] via-white to-white border-b border-gray-100">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-[#E9D5FF] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-40 h-[520px] w-[520px] rounded-full bg-[#FFD6C8] opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* LEFT - copy & search */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-medium text-violet-700 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              No.1 Job Hunt Website
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-violet-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                10,000+ jobs live
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.05] text-gray-900">
              Search, Apply &
              <br />
              Get Your <span className="bg-gradient-to-r from-[#6A38C2] to-[#FA4F09] bg-clip-text text-transparent">Dream Job</span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-6 text-gray-600">
              Discover life-changing career opportunities from top companies.
              <br className="hidden sm:block" />
              Curated roles, instant apply, and faster callbacks — all in one place.
            </p>

            {/* Search bar */}
            <div className="mt-7 flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-lg shadow-violet-100/60 max-w-[560px]">
                <div className="flex items-center gap-2 flex-1 pl-3">
                  <Search className="h-5 w-5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Job title, skill or company"
                    className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                  />
                </div>
                <Button
                  onClick={searchjobHandler}
                  className="rounded-full bg-[#6A38C2] hover:bg-[#5a2fb0] px-6 h-10 font-semibold shrink-0"
                >
                  <Search className="h-4 w-4 mr-1.5 hidden sm:inline" />
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-gray-500 font-medium">Popular:</span>
                {quickTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      dispatch(setSearchedQuery(tag));
                      navigate("/browse");
                    }}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[10px] font-bold text-white">50K+</span>
                </div>
                <p className="leading-tight">
                  <span className="font-semibold text-gray-900">Trusted by 50K+ job seekers</span>
                  <br />
                  <span className="text-xs text-gray-500">4.8/5 average rating</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - visual stats */}
          <div className="relative lg:pl-6">
            <div className="relative rounded-[24px] bg-white border border-gray-100 shadow-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-violet-600 flex items-center justify-center text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Dream jobs waiting</p>
                    <p className="text-xs text-gray-500">Updated every 5 minutes</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1">+1,240 today</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "Active Jobs", v: "10,240+", icon: Briefcase, c: "bg-blue-50 text-blue-600" },
                  { k: "Companies", v: "500+", icon: Building2, c: "bg-orange-50 text-orange-600" },
                  { k: "Hires / month", v: "3.2K", icon: TrendingUp, c: "bg-emerald-50 text-emerald-600" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-3 text-center">
                    <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-lg ${s.c}`}>
                      <s.icon className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-sm font-bold text-gray-900">{s.v}</p>
                    <p className="text-[11px] text-gray-500">{s.k}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { role: "Senior Frontend Engineer", comp: "Google • Bangalore", tag: "₹18-28 LPA", color: "bg-violet-600" },
                  { role: "Product Designer", comp: "Flipkart • Remote", tag: "₹14-22 LPA", color: "bg-orange-500" },
                  { role: "Data Scientist", comp: "Microsoft • Hyderabad", tag: "₹22-30 LPA", color: "bg-blue-600" },
                ].map((j) => (
                  <div key={j.role} className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition">
                    <span className={`h-9 w-9 rounded-lg ${j.color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{j.role}</p>
                      <p className="text-xs text-gray-500 truncate">{j.comp}</p>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 bg-gray-100 rounded-full px-2 py-1 shrink-0">{j.tag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                <Users className="h-4 w-4" />
                <span>2,341 people applied in last 24h</span>
              </div>
            </div>

            {/* floating badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-3 shadow-xl">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium">Interview calls in avg. 3 days</span>
            </div>
          </div>
        </div>

        {/* logos */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-6">
          <span className="font-semibold tracking-widest text-gray-500">TRUSTED BY</span>
          <span className="h-3 w-px bg-gray-200 hidden sm:inline-block" />
          <span>Google</span>
          <span>•</span>
          <span>Microsoft</span>
          <span>•</span>
          <span>Amazon</span>
          <span>•</span>
          <span>Flipkart</span>
          <span>•</span>
          <span>TCS</span>
          <span>•</span>
          <span>Infosys</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
