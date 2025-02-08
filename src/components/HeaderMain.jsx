import logo from "../assets/icon.png";
import { BsFillBookmarkFill, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HeaderMain = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const userCheck = user?.labels?.includes("admin");

    const handleProtectedRoute = (e) => {
        if (!user) {
            e.preventDefault();
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
                        placeholder="Search here..."
                        className="border-gray-200 border outline-none p-2 px-4 rounded-lg w-full"
                    />
                    <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
                </div>

                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] cursor-pointer">
                    <Link to="/saved" onClick={handleProtectedRoute}>
                        <BsFillBookmarkFill className="text-gray-500 hover:text-primary transition size-6" />
                    </Link>

                    {user ? (
                        <Link
                            to={userCheck ? "/admin" : "/dashboard"}
                            className="flex items-center gap-2 text-lg font-semibold text-gray-700"
                        >
                            <span>{user.username}</span>
                        </Link>
                    ) : (
                        <Link to="/login" className="flex items-center gap-1 text-gray-500 hover:text-primary transition">
                            <BiUser />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
