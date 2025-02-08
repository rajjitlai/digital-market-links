/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/personal/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Saved from "./pages/personal/Saved";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Layout from "./Layout";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      setRedirectPath(window.location.pathname);
    }
  }, [loading, user]);

  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to={`/login?redirect=${redirectPath || "/"}`} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={
          <Layout>
            <SingleProduct />
          </Layout>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/saved" element={
          <PrivateRoute>
            <Layout>
              <Saved />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <PrivateRoute>
            <Layout>
              <AdminDashboard />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
