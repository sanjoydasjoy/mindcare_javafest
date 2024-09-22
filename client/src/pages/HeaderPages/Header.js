import { Link } from "react-router-dom";
import { Brain, User } from "lucide-react"; 
import '../../Allcss/Header.css'; 
import ThemeToggle from "../../Components/ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Brain className="logo-icon" />
        <span className="logo-text">MindCare</span>
      </Link>
      <nav className="nav-links">
        <Link to="/conditions" className="nav-item">Conditions</Link>
        <Link to="/resources" className="nav-item">Resources</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About</Link>
        <ThemeToggle />
        
        {/* Profile dropdown */}
        <div className="group relative">
          
            <User className="profile-icon cursor-pointer" />
          
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <Link to="/signup" className="dropdown-item">SignUp</Link>
              <Link to="/login" className="dropdown-item">Login</Link>
              <Link to="/logout" className="dropdown-item">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
