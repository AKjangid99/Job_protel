import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import {
  Code2,
  Server,
  Layers,
  Database,
  Cloud,
  Brain,
  Shield,
  Palette,
  Megaphone,
  Video,
  Cpu,
  Sparkles,
} from "lucide-react";

const categories = [
  { label: "Frontend Developer", icon: Code2, color: "from-violet-500 to-indigo-500" },
  { label: "Backend Developer", icon: Server, color: "from-blue-500 to-cyan-500" },
  { label: "Full Stack Developer", icon: Layers, color: "from-orange-500 to-pink-500" },
  { label: "Mern Developer", icon: Database, color: "from-emerald-500 to-teal-500" },
  { label: "Data Scientist", icon: Brain, color: "from-rose-500 to-orange-500" },
  { label: "DevOps Engineer", icon: Cloud, color: "from-sky-500 to-blue-600" },
  { label: "Machine Learning", icon: Cpu, color: "from-fuchsia-500 to-violet-600" },
  { label: "Cybersecurity", icon: Shield, color: "from-slate-700 to-slate-900" },
  { label: "Product Manager", icon: Sparkles, color: "from-amber-500 to-orange-600" },
  { label: "UX/UI Designer", icon: Palette, color: "from-pink-500 to-rose-500" },
  { label: "Graphics Designer", icon: Megaphone, color: "from-indigo-500 to-violet-600" },
  { label: "Video Editor", icon: Video, color: "from-red-500 to-orange-500" },
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-violet-600">EXPLORE BY SKILL</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Browse by Category</h2>
          <p className="mt-1 text-sm text-gray-500">Find the role that fits your superpower.</p>
        </div>
        <p className="text-sm text-gray-500 hidden sm:block">Click any category to see live openings →</p>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {categories.map(({ label, icon: Icon, color }) => (
          <button
            key={label}
            onClick={() => searchjobHandler(label)}
            className="group text-left rounded-2xl border border-gray-100 bg-white p-4 hover:shadow-lg hover:shadow-violet-100 hover:border-violet-200 transition-all"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-sm group-hover:scale-105 transition`}>
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 text-[13px] font-semibold leading-tight text-gray-900 group-hover:text-violet-700">{label}</p>
            <p className="mt-1 text-xs text-gray-500">1.2k+ openings</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
