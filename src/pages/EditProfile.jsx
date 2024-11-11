import { useState } from 'react';
import { FaWrench } from 'react-icons/fa';
import ProfileHeader from '../components/ProfileHeader';

function EditProfile() {
    const [username, setUsername] = useState("foolano_di_tall");
    const [location, setLocation] = useState("Brazil");
    const [about, setAbout] = useState("Tell us something about yourself...");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile updated:", { username, location, about });
    };

    return (
        <div className="w-3xl mx-5 p-6">
            <ProfileHeader username={username} location={location} />

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
                            className="mt-1 p-2 block w-96 rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" // Fixed width (w-96)
                            style={{
                                border: '1px var(--border-color) solid'
                            }}
                            placeholder="Enter your username"
                            maxLength={20} // Set max length to 20 characters
                        />
                    </div>

                    {/* Location Field */}
                    <div>
                        <label className="block text-xl text-gray-700">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="mt-1 p-2 block w-96 rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" // Fixed width (w-96)
                            style={{
                                border: '1px var(--border-color) solid'
                            }}
                            placeholder="Enter your location"
                            maxLength={30} // Set max length to 30 characters
                        />
                    </div>

                    {/* About Field */}
                    <div>
                        <label className="block text-xl text-gray-700">About</label>
                        <textarea
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="mt-1 p-2 block w-96 rounded-md border-gray-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" // Fixed width (w-96)
                            style={{
                                border: '1px var(--border-color) solid'
                            }}
                            rows="4"
                            placeholder="Tell us something about yourself..."
                            maxLength={200} // Set max length to 200 characters for the "About" field
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 p-2 w-96 border border-green-500 text-green-500 rounded-md hover:bg-gray-100 flex items-center justify-center"
                    >
                        <FaWrench className="mr-2 text-gray-700" /> Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
