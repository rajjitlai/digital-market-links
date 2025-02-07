/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/personal/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Saved from "./pages/personal/Saved";
import SingleProduct from "./components/SingleProduct";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      setRedirectPath(window.location.pathname);
    }
  }, [loading, user]);

  if (loading) return <div>Loading...</div>; // Show loading spinner while checking auth
  return user ? children : <Navigate to={`/login?redirect=${redirectPath || "/"}`} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProduct />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path="/saved" element={
          <PrivateRoute>
            <Saved />
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
