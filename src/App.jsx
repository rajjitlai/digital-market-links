import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Register from './auth/Register';
import Login from './auth/Login';
import VerifyEmail from './components/VerifyEmail';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
