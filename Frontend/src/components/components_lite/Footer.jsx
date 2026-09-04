import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-extrabold">
              <span className="text-[#6A38C2]">Job</span> <span className="text-[#FA4F09]">Portal</span>
            </h3>
            <p className="mt-2 text-sm leading-5 text-gray-500">
              The most approachable way to find, apply, and land your next role. Trusted by thousands across India.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/Jobs" className="hover:text-violet-600">Browse Jobs</Link></li>
              <li><Link to="/Browse" className="hover:text-violet-600">Search</Link></li>
              <li><Link to="/Creator" className="hover:text-violet-600">About creator</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/PrivacyPolicy" className="hover:text-violet-600">Privacy Policy</Link></li>
              <li><Link to="/TermsofService" className="hover:text-violet-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 p-4">
            <p className="text-sm font-semibold text-gray-900">Get hired faster</p>
            <p className="mt-1 text-xs text-gray-500">Create a profile and let recruiters find you. Average response time 3 days.</p>
            <div className="mt-3 flex gap-2">
              <Link to="/register" className="flex-1 rounded-full bg-[#6A38C2] text-white text-center text-sm font-semibold py-2 hover:bg-[#5a2fb0]">Join now</Link>
              <Link to="/Jobs" className="flex-1 rounded-full border border-gray-200 bg-white text-center text-sm font-semibold py-2 hover:bg-gray-50">Browse</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© 2024 Sunfire Sensei. All rights reserved. Powered by Ankit Pathak</p>
          <p>Made with care for job seekers in India ♡</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
