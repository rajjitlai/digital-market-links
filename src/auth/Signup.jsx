import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/logo.png"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#ffffff]">
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <img src={banner} alt="logo" className="w-3/4 object-contain" />
      </div>
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary text-lg bg-gray-50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary text-lg bg-gray-50"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary text-lg bg-gray-50"
              />
            </div>

            <button type="submit" className="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-secondary transition">
              Signup
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Login now</Link>
          </p>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-gray-500 text-sm">
              <span className="bg-white px-2">OR</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/" className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
              Sign up with
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Sign-In" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
