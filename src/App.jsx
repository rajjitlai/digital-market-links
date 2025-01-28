import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-bgPrimary min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
