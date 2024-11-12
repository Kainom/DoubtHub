import React, { useEffect, useState } from "react";
import { FaWrench } from "react-icons/fa";
import ProfileHeader from "../components/ProfileHeader";
import { useSelector } from "react-redux";
import { getUser, updateUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { token, user } = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await getUser(user.userId, token);
        setProfile(userData);

        // Set form fields after profile is fetched
        setUsername(userData.username || "");
        setCountry(userData.country || "");
        setAbout(userData.about || "");

        setLoading(false);
      } catch (e) {
        setError("Failed to fetch user data: " + e.message);
        setLoading(false);
      }
    };

    if (token && user) {
      fetchUser();
    }
  }, [token, user]);

  if (loading) return <div>{country}.</div>;
  if (error) return <div>{error}</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = { username, country, about };
    console.log(updatedData);
    try {
      const updatedUser = await updateUser(user.userId, token, updatedData);
      setProfile(updatedUser);
      navigate(`/profile`);
    } catch (e) {
      setError("Failed to update user: " + e.message);
    }
  };

  return (
    <div className="w-3xl p-6 w-full flex items-center flex-col">
      <div className="mt-6 w-1/2">
        <ProfileHeader username={username} country={country} />
        {/* Edit Profile Form */}
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {/* Username Field */}
            <div>
              <label className="block text-xl text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your username"
                maxLength={20}
              />
            </div>
            {/* country Field */}
            <div>
              <label className="block text-xl text-gray-700">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your Country"
                maxLength={30}
              />
            </div>
            {/* About Field */}
            <div>
              <label className="block text-xl text-gray-700">About</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                rows="4"
                placeholder="Tell us something about yourself..."
                maxLength={200}
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-4 p-2 border border-green-500 text-green-500 rounded-md hover:bg-gray-100 flex items-center justify-center"
              >
                <FaWrench className="mr-2 text-gray-700" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
