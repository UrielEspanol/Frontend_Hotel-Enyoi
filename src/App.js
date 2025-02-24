import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Hotels from './pages/HotelsPage.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import './styles.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
