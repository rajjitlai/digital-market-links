import logo from "../assets/icon.png";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const HeaderMain = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const userCheck = user?.labels?.includes("admin");

    const handleProtectedRoute = (e) => {
        if (!user) {
            e.preventDefault();
            toast.error("Please login to save your favorite product.")
            navigate("/login");
        }
    };

    return (
        <div className="border-b border-gray py-6">
            <div className="container px-16 flex flex-col md:flex-row justify-between items-center gap-4">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-20 md:w-24" />
                </Link>

                <div className="w-full sm:w-[300px] md:w-[70%] relative">
                    <input
                        type="text"
                        placeholder="Searching will be available soon..."
                        className="border-gray-200 border outline-none p-2 px-4 rounded-lg w-full"
                    />
                    <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
                </div>

                <div className="hidden lg:flex gap-4 cursor-pointer">
                    <Link to="/saved" onClick={handleProtectedRoute} className="text-black hover:text-primary hover:underline font-bold items-center justify-center flex text-lg">
                        Saved
                    </Link>

                    {user ? (
                        <Link
                            to={userCheck ? "/admin" : "/dashboard"}
                            className="flex items-center gap-2 text-lg font-semibold text-gray-700"
                        >
                            <span>{user.username}</span>
                        </Link>
                    ) : (
                        <Link to="/login" className="flex items-center gap-1 text-black hover:text-primary hover:underline font-bold text-lg">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
