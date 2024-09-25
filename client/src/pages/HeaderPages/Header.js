import { Link, useHistory } from "react-router-dom";
import { Brain, User } from "lucide-react";
import '../../Allcss/Header.css';
import ThemeToggle from "../../Components/ThemeToggle";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Ensure credentials like cookies are included
      });
      // After successful logout, clear any user-related data if necessary
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Brain className="logo-icon" />
        <span className="logo-text">MindCare</span>
      </Link>
      <nav className="nav-links">
        <Link to="/conditions" className="nav-item">Conditions</Link>
        <Link to="/resources" className="nav-item">Resources</Link>
        <Link to="/hotlines" className="nav-item">Hotlines</Link>
        <Link to="/about" className="nav-item">About</Link>
        <ThemeToggle />

        {/* Profile dropdown */}
        <div className="group relative">
          <User className="profile-icon cursor-pointer" />
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <Link to="/signup" className="dropdown-item">SignUp</Link>
              <Link to="/login" className="dropdown-item">Login</Link>
              <button className="dropdown-item button" onClick={handleLogout}>Logout</button>


            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
