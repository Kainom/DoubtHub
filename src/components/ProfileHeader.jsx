import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function ProfileHeader({ username, country }) {
  return (
    <div className="relative flex items-center max-lg:flex-col max-lg:gap-2 space-x-4">
      <div className="w-40 h-40 rounded-lg shadow-md overflow-hidden">
        <img
          src={`https://api.dicebear.com/9.x/croodles/svg?seed=${username}`}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl">{username}</h1>
        <p className="text-gray-500 flex items-center">
          <FaBirthdayCake className="mr-2" /> Member for 41 days
        </p>
        <p className="text-gray-500 flex items-center">
          <FaLocationDot className="mr-2" /> {country}
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;
