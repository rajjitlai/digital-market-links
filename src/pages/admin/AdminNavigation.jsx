/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AdminNavigation = ({ setActiveComponent }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Admin Panel</h3>

            {/* Dashboard button navigates to /dashboard */}
            <Link
                to="/dashboard"
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2 text-center"
            >
                Dashboard
            </Link>

            {/* Contacts button sets active component */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => setActiveComponent("Contacts")}
            >
                Contacts
            </button>
        </div>
    );
};

export default AdminNavigation;
