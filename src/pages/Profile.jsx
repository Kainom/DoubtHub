import React from "react";
import { FaWrench } from "react-icons/fa";
import { topQuestions, topTags } from "./sample_data";
import ProfileHeader from "../components/ProfileHeader";

const UserProfile = () => {
  const username = "foolano_di_tall";
  const location = "Brazil";

  return (
    <div className="w-3xl mx-5 p-6">
      {/* Reuse Profile Header */}


      {/* Edit Profile Button */}
      <div className="flex justify-between items-center mt-4">
        <ProfileHeader username={username} location={location} />
        <a
          href="/EditProfile"
          className="flex items-center p-2 border text-gray-500 rounded-md hover:bg-gray-100 border-gray-400"
        >
          <FaWrench className="mr-2 text-gray-700" /> Edit Profile
        </a>
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
                    <a
                      href="#"
                      className="hover:bg-slate-300 inline-flex items-center justify-center font-mono font-bold text-gray-800 bg-slate-200 rounded text-sm px-1 py-1"
                    >
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
