import React, { useEffect, useState } from "react";
import { FaWrench } from "react-icons/fa";
import { topQuestions, topTags } from "./sample_data";
import ProfileHeader from "../components/ProfileHeader";
import { getUser } from "../utils/api";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { token, user } = useSelector(state => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await getUser(user.userId, token);
        setProfile(userData);
        setLoading(false);
      } catch (e) {
        setError("Failed to fetch user data: " + e.message);
        setLoading(false);
      }
    };
    
    if (token && user) {
      fetchUser();
    }
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-3xl mx-5 p-6 w-full flex flex-col items-center">
      <div className="mt-6 w-1/2">
        <div className="mt-6 flex justify-between">
          <ProfileHeader
            username={profile?.username}
            country={profile?.country}
          />
          <div className="flex items-center">
            <a
              href="/EditProfile"
              className="flex items-center p-2 border text-gray-500 rounded-md hover:bg-gray-100 border-gray-400"
            >
              <FaWrench className="mr-2 text-gray-700" /> Edit Profile
            </a>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="px-0 py-2 text-left text-xl font-normal">About</h3>
            <p className="text-gray-700 text-wrap break-words">{profile?.about}</p>
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
    </div>
  );
};

export default UserProfile;
