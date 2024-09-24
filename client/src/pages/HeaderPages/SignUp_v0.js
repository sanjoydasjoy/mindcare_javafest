import { Link } from "react-router-dom";
import '../../Allcss/HeaderPages/Auth.css'; 

export default function Signup() {
  return (
    <div className="auth-container">
      <h2 className="auth-header">Create a New Account</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <div className="auth-footer">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
