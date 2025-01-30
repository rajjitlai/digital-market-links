import { useAuth } from "../../context/AuthContext";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center">
          {user?.image ? (
            <img
              src={user.image}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          ) : (
            <BiUser className="w-24 h-24 text-gray-400" />
          )}

          <h2 className="text-2xl font-semibold mt-4">{user?.name || "User Name"}</h2>

          <Link to="/edit-profile">
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Saved Items</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {user?.savedItems?.length > 0 ? (
              user.savedItems.map((item, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded-lg text-center">
                  {item}
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-3 text-center">No saved items found</p>
            )}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-[max-content] mt-6 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
