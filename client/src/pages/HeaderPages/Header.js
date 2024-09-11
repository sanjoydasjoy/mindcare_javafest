import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import '../../Allcss/Header.css'; 
import ThemeToggle from "../../Components/ThemeToggle";


export default function Header() {
  return (
    <header>
  <Link to="/" className="logo">
    <Brain className="icon" />
    <span className="logo-text">MindCare</span>
  </Link>
  <nav className="nav-links">
    <Link to="/conditions" className="nav-item">Conditions</Link>
    <Link to="/resources" className="nav-item">Resources</Link>
    <Link to="/contact" className="nav-item">Contact</Link>
    <Link to="/about" className="nav-item">About</Link>

    <ThemeToggle />
  </nav>
</header>

  );
}
