import React from "react";
import { FaBirthdayCake, FaWrench } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { topQuestions } from "./sample_data";
import { topTags } from "./sample_data";

const UserProfile = () => {
  return (
    <div className="w-3xl mx-5 p-6">
      {/* Profile Header */}
      <div className="relative flex items-center space-x-4">
        <div className="w-40 h-40 rounded-lg shadow-md overflow-hidden">
          <img
            src="https://api.dicebear.com/9.x/croodles/svg?seed=foolano_di_tall"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl">foolano_di_tall</h1>
          <p className="text-gray-500 flex items-center">
            <FaBirthdayCake className="mr-2" /> Member for 41 days
          </p>
          <p className="text-gray-500 flex items-center">
            <FaLocationDot className="mr-2" /> Brazil
          </p>
        </div>

        {/* Edit Profile Button */}
        <button
          className="absolute flex items-center top-0 right-0 mt-4 mr-4 p-2 border text-gray-500 rounded-md hover:bg-gray-50 border-gray-400 "
        >
         <FaWrench className="mr-2 text-gray-700"/> Edit Profile
        </button>
      </div>

      {/* Profile Info */}
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="px-0 py-2 text-left text-xl font-normal">About</h3>
          <p className="text-gray-700">
            Passionate developer with a love for building web applications and
            learning new technologies.
          </p>
        </div>
      </div>

      {/* Top Tags and Top Questions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Top Tags Table */}
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-0 py-2 text-left text-xl font-normal">
                  Tags
                </th>
              </tr>
            </thead>
            <tbody>
              {topTags.map((tag, index) => (
                <tr key={index} className="border rounded-lg py-5 px-5">
                  <td className="px-3 py-3">
                    <a href="#" className="hover:bg-slate-300 inline-flex items-center justify-center font-mono font-bold text-gray-800 bg-slate-200 rounded text-sm px-1 py-1">
                      {tag}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Questions Table */}
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-0 py-2 text-left text-xl font-normal">
                  Questions
                </th>
              </tr>
            </thead>
            <tbody>
              {topQuestions.map((question, index) => (
                <tr key={index} className="border py-5 px-5">
                  <td className="px-3 py-3">
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                      {question}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
