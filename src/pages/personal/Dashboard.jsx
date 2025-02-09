import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUserProfile } from "../../lib/getUser";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import Saved from "./Saved";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("Fetching profile for user:", user);
      if (!user.$id) {
        console.error("Error: user.id is undefined");
        return;
      }
      getUserProfile(user.id).then(setUserData);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
  };

  if (!userData) return <p className="text-center text-gray-600 mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 relative">
          {userData?.image ? (
            <img
              src={userData.image}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <BiUser className="w-24 h-24 text-gray-600 border-4 border-gray-300 rounded-full p-2" />
          )}
        </div>

        <h2 className="text-3xl font-semibold mt-4 text-black">
          {userData?.username || "User Name"}
        </h2>

        <Link to="/edit-profile">
          <button className="mt-2 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition shadow-md">
            Edit Profile
          </button>
        </Link>
      </div>

      {/* Saved Products Section */}
      <div className="w-full max-w-5xl px-4">
        <Saved />
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-8 py-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition shadow-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
