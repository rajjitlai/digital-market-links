import { useState, useEffect } from "react";
import AdminUpload from "./AdminUpload";
import ContactMessages from "./ContactMessages";

const AdminDashboard = () => {
    const [selectedTab, setSelectedTab] = useState("upload");

    // Ensure that AdminUpload is shown by default when the component mounts
    useEffect(() => {
        setSelectedTab("upload");
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>

            {/* Navigation Tabs */}
            <div className="flex justify-around mb-6 border-b pb-3">
                <button
                    onClick={() => setSelectedTab("upload")}
                    className={`px-4 py-2 font-medium ${selectedTab === "upload" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                >
                    Upload
                </button>
                <button
                    onClick={() => setSelectedTab("contacts")}
                    className={`px-4 py-2 font-medium ${selectedTab === "contacts" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                >
                    Contacts
                </button>
            </div>

            {/* Content Switching */}
            <div>
                {selectedTab === "upload" && <AdminUpload />}
                {selectedTab === "contacts" && <ContactMessages />}
            </div>
        </div>
    );
};

export default AdminDashboard;
